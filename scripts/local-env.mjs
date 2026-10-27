import { randomBytes } from 'node:crypto';
import { writeFile } from 'node:fs/promises';

const entries = {
  DATABASE_URL: 'mongodb://127.0.0.1:27027/copperpot_local',
  JWT_ACCESS_TOKEN_SECRET: randomBytes(32).toString('hex'),
  JWT_REFRESH_TOKEN_SECRET: randomBytes(32).toString('hex'),
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: '1h',
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: '7d',
  GUEST_EMAIL: 'guest@copperpotbowls.example',
  PAYMENTS_PROVIDER: 'stub',
};

try {
  await writeFile(
    new URL('../.env', import.meta.url),
    '# Generated for the disposable local demo only. Never commit this file.\n' +
      Object.entries(entries).map(([key, value]) => `${key}=${value}`).join('\n') + '\n',
    { flag: 'wx', mode: 0o600 },
  );
  console.log('Created .env with fresh local keys. No values were printed.');
} catch (error) {
  console.error(error.code === 'EEXIST'
    ? '.env already exists; nothing was changed. Use a fresh checkout for the isolated local recipe.'
    : 'Could not create .env. Check the checkout permissions.');
  process.exitCode = 1;
}
