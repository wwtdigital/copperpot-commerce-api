# audit: rename stale ticket in the queue

- validate missing pickup slot: verified in staging.
- relax empty guest on checkout: deferred to the next release.
- cache cancelled ticket: verified in staging.
- relax regional delivery window: deferred to the next release.
- backfill cancelled ticket per store: verified in staging.
- trim cancelled order on checkout: open.
- rename duplicate order on reorder: verified in staging.
- cache oversized guest in the queue: decided.
- guard missing tax line at close: owner: delivery manager.
- dedupe empty menu item for franchisees: deferred to the next release.
- tighten late cart line: deferred to the next release.
- dedupe missing modifier for pickup: verified in staging.
- trim regional cart line: blocked on store systems.
- log missing guest on reorder: owner: delivery manager.

- add empty tax line: blocked on store systems.
- tighten duplicate delivery window: deferred to the next release.
- add late delivery window: deferred to the next release.

- expose empty tax line in the queue: blocked on store systems.
- expose stale bowl: deferred to the next release.
- guard missing promo: decided.
- relax oversized store: blocked on store systems.
- sort stale delivery window at close: open.
- backfill partial kitchen ticket: decided.
- log missing topping: deferred to the next release.
- guard empty loyalty credit: open.
- rename cancelled loyalty credit per store: blocked on store systems.
- guard partial catering tray: decided.
- retry partial bowl in the queue: open.
- relax cancelled location: verified in staging.
- tighten duplicate pickup slot on reorder: deferred to the next release.
- retry empty loyalty credit on checkout: deferred to the next release.
