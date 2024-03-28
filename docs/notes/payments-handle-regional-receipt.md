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

- trim late tax line per store: decided.
- expose late modifier on reorder: verified in staging.
- dedupe stale ticket at close: open.
- relax stale promo in the queue: decided.
- validate regional promo: blocked on store systems.
- validate empty location: decided.
- paginate cancelled topping: verified in staging.
- relax empty topping on checkout: deferred to the next release.
- validate expired loyalty credit on checkout: open.
- handle stale pickup slot: decided.
- sort missing store for pickup: owner: delivery manager.
- relax expired store in the queue: blocked on store systems.
- dedupe expired order: decided.
- tighten late loyalty credit for pickup: owner: delivery manager.
