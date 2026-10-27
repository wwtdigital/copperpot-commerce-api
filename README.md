# Copperpot commerce API

> **Fictional company, for demonstration.** Copperpot Bowls, its people,
> repositories and business records are a WWT Digital scenario. Live GitHub
> reviews, CI runs and merges have their real service timestamps.

This is the shared commerce backend for a fictional fast-casual restaurant
estate. It serves menu browsing, carts, ordering and store order handling.
Payments use a stub provider; the loyalty ledger is a separate sensitive
surface. This repository is the first subject of the readiness review.

## Start here

- [Local development](docs/local-development.md): runtime, disposable database,
  environment, build, tests, health checks and troubleshooting.
- [Change workflow](docs/change-workflow.md): ticket, branch, review, QA, merge
  and the handoff to release promotion.
- [System and ownership](docs/system-context.md): applications, dependencies,
  team responsibilities and the limits of this demo.
- [Engineering standards](https://copperpot-demo.atlassian.net/wiki/spaces/ENG)
  and [release records](https://copperpot-demo.atlassian.net/wiki/spaces/REL)
  remain the team's shared reference. Access requires the demo site's account.

## First verified local run

Use Node 20, matching `.nvmrc` and the existing CI workflow, npm 10, and Docker
with Compose v2. No shared database or team-vault credential is needed for this
local path. From the repository root:

```sh
nvm use
npm ci
npm run local:env
docker compose -f compose.local.yml up -d --wait
npm run build
npm run lint:check
npm run format:check
npm run test:unit -- --runInBand
npm run local:smoke
```

`local:env` creates a private, ignored `.env` with random local signing keys and
refuses to replace an existing file. `local:smoke` starts both built applications
on temporary ports, checks their HTTP health and required correlation header,
then stops its processes. A passing smoke proves those startup contracts, not
checkout, payment settlement, loyalty correctness or a store deployment.

When finished, remove only this checkout's disposable database:

```sh
docker compose -f compose.local.yml down --volumes
```

## Two applications

| Application | Audience and responsibility | Entrypoint | Local address |
|---|---|---|---|
| `guest-api` | Mobile and web: menu, items, add-ons, locations and order placement | `src/apps/guest-api/main.ts` | `http://localhost:4000/api` |
| `store-api` | POS, kiosk and kitchen display: order statuses, processing queue and order notes | `src/apps/store-api/main.ts` | `http://localhost:4100/store` |

After setup, run `npm run start:guest` or `npm run start:store` in separate
terminals. The legacy `npm run start` launches the combined app on port 4000;
do not run it beside `guest-api` on that port. Both applications share MongoDB
and modules under `src/`; neither health response proves the other is healthy.

## A first change

Start with a small documentation or test task outside `src/payments/` and
`src/loyalty/`. Capture the before/after result, rerun the commands above, and
follow the [change workflow](docs/change-workflow.md). The working agreement
requires review, but the baseline does not yet enforce every review or boundary
in tooling. Successful local checks do not grant permission to promote a release.

## Source and licence

Derived from the backend of `olasunkanmi-SE/restaurant` at `a9c9aff`.
[NOTICE](NOTICE) records the import; [LICENSE](LICENSE) retains the upstream MIT
licence. The fictional history and live demonstration stream are separate from
that upstream project.
