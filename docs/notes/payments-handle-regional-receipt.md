# payments: handle regional receipt

- normalise partial store: decided.
- guard oversized loyalty credit: verified in staging.
- relax missing bowl on checkout: decided.
- cache cancelled ticket: blocked on store systems.

- guard oversized cart line: blocked on store systems.
- cache expired cart line: blocked on store systems.
- backfill missing topping at close: deferred to the next release.
- sort stale order at close: open.
- trim oversized receipt on reorder: decided.
- dedupe oversized delivery window at close: verified in staging.
- retry empty location: owner: delivery manager.
- dedupe late delivery window for pickup: owner: delivery manager.
- trim missing topping for franchisees: decided.
- normalise cancelled guest: decided.
- dedupe empty topping on checkout: deferred to the next release.
- add cancelled bowl on reorder: open.
- sort late kitchen ticket: deferred to the next release.
- trim empty loyalty credit: owner: delivery manager.
