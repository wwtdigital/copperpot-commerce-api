import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { fileURLToPath } from 'node:url';
import { setTimeout as pause } from 'node:timers/promises';

const root = fileURLToPath(new URL('../', import.meta.url));
const children = [];
const results = [];

async function unusedPort() {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const port = server.address().port;
  await new Promise(resolve => server.close(resolve));
  return port;
}

async function stop() {
  await Promise.all(children.map(async ({ child, exited }) => {
    if (child.exitCode !== null || child.signalCode !== null) return;
    child.kill('SIGTERM');
    await Promise.race([exited, pause(2000)]);
    if (child.exitCode === null && child.signalCode === null) child.kill('SIGKILL');
    await exited;
  }));
}
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => { void stop().then(() => process.exit(1)); });
}

try {
  const text = await readFile(new URL('../.env', import.meta.url), 'utf8');
  const local = Object.fromEntries(text.split('\n').filter(line => /^[A-Z_]+=/.test(line))
    .map(line => [line.slice(0, line.indexOf('=')), line.slice(line.indexOf('=') + 1).trim()]));
  if (local.DATABASE_URL !== 'mongodb://127.0.0.1:27027/copperpot_local') {
    throw new Error('The smoke test requires the disposable local database from local:env.');
  }
  if (local.PAYMENTS_PROVIDER !== 'stub') throw new Error('The local smoke test requires the stub provider.');

  for (const [app, prefix, portKey] of [
    ['guest-api', 'api', 'GUEST_API_PORT'], ['store-api', 'store', 'STORE_API_PORT'],
  ]) {
    const port = await unusedPort();
    const child = spawn(process.execPath, [`dist/src/apps/${app}/main.js`], {
      cwd: root, env: { ...process.env, ...local, [portKey]: String(port) }, stdio: 'ignore',
    });
    const exited = new Promise(resolve => { child.once('exit', resolve); child.once('error', resolve); });
    let spawnError;
    child.once('error', error => { spawnError = error; });
    children.push({ child, exited });
    const url = `http://127.0.0.1:${port}/${prefix}/health`;
    const deadline = Date.now() + 25000;
    let healthy = false;
    while (Date.now() < deadline) {
      if (spawnError || child.exitCode !== null) throw new Error(`${app} exited before health was ready. Run its start command for diagnostics.`);
      try {
        const response = await fetch(url, {
          headers: { 'x-correlation-id': 'local-readiness-smoke' }, signal: AbortSignal.timeout(1000),
        });
        if (response.ok) {
          assert.deepEqual(await response.json(), { app, status: 'ok' });
          healthy = true;
          break;
        }
      } catch { /* Startup may still be opening its database connection. */ }
      await pause(200);
    }
    assert.ok(healthy, `${app} did not become healthy. Check the local database and run npm run build.`);
    const missingHeader = await fetch(url, { signal: AbortSignal.timeout(2000) });
    assert.equal(missingHeader.status, 400, `${app} must reject a missing correlation header.`);
    results.push({ app, health: 'pass', missingCorrelationHeader: 'rejected' });
  }
  console.log(JSON.stringify({ scope: 'local startup contracts only', results }, null, 2));
} catch (error) {
  console.error(error.code === 'ENOENT' ? 'Run npm run local:env and npm run build first.' : error.message.split('\n')[0]);
  process.exitCode = 1;
} finally {
  await stop();
}
