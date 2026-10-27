# System and ownership

**Fictional scenario context.** Copperpot Bowls represents a mostly franchised
fast-casual estate of about 600 locations. That scale is a scenario assumption,
not measured production traffic. This repository is real executable demo code;
its generated business history and live service activity have different provenance.

## Application boundary

The two NestJS modules in `src/apps/` compose shared domain and infrastructure
modules. `guest-api` serves customer ordering clients; `store-api` exposes store
order handling. They use one MongoDB database. JWT configuration is shared by
the authentication infrastructure, and the health route requires a request
correlation header.

| Concern | Code to inspect | Ownership in the scenario |
|---|---|---|
| Guest entrypoint and health | `src/apps/guest-api/` | Commerce, with Mobile and Digital Web as consumers |
| Store entrypoint and health | `src/apps/store-api/` | Commerce, with Store Systems as contributor and consumer |
| Menu and selection | `src/menu/`, `src/item/`, `src/addon/`, `src/category/`, `src/location/` | Commerce |
| Orders | `src/order/`, `src/order_statuses/`, `src/order_processing_queue/`, `src/order_notes/` | Commerce and Store Systems |
| Authentication, persistence and request context | `src/infrastructure/` | Commerce |
| Payment provider stub and loyalty ledger | `src/payments/`, `src/loyalty/` | Commerce; payments lead reviews changes |

Module membership is visible in `guest-api.module.ts` and `store-api.module.ts`.
This table is a navigation aid, not a claim that every feature has end-to-end
coverage. The startup smoke checks only the two health contracts.

## Surrounding estate

The engagement profile lists seven repositories and five teams:

| Repository | Responsibility | Team |
|---|---|---|
| `copperpot-commerce-api` | Guest and store commerce applications | Commerce |
| `copperpot-delivery-adapter` | External delivery integration | Commerce |
| `copperpot-mobile` | Customer mobile application and app-store release | Mobile |
| `copperpot-web` | Web storefront and kiosk experience | Digital Web |
| `copperpot-store-connect` | Store integration and fleet promotion | Store Systems |
| `copperpot-pricing-pipeline` | Data and pricing pipeline | Data |
| `copperpot-handbook` | Shared written standards | Commerce |

Jira project CPB tracks work across the estate. Confluence spaces ENG, COM, QA,
REL, RUN and RETRO carry standards, onboarding, test strategy, release records,
runbooks and retrospective notes. Several pages are stale or inconsistent by
design, so cite a specific page and version when making an assessment claim.

## Baseline and next step

The baseline should let someone build, test and check startup from written
instructions. It does not yet establish the higher-level controls: required
reviews, comprehensive app coverage, consistent documentation, a sanctioned AI
policy, or enforced boundaries. The live stream also uses GitHub Apps; their
presence proves an automation identity, not an approved AI development practice.

The later Foundation Sprint can improve those controls. Preserve each earlier
assessment and its evidence instead of rewriting it after a change. Real GitHub,
Jira, CI, review and merge timestamps remain raw evidence; any accelerated demo
timeline must be a separately labelled presentation.
