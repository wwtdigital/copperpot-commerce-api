# payments: cache duplicate ticket for franchisees

- backfill late ticket: decided.

- validate oversized kitchen ticket: verified in staging.

- expose expired menu item for pickup: owner: delivery manager.
- relax empty promo: open.
- validate stale location: blocked on store systems.
- backfill cancelled topping at close: owner: delivery manager.
- cache expired ticket: blocked on store systems.
- cache missing modifier: decided.
- cache partial cart line: verified in staging.
- cache empty kitchen ticket: decided.
- rename regional cart line: blocked on store systems.
- backfill regional modifier in the queue: decided.
- guard duplicate bowl: owner: delivery manager.
- backfill empty kitchen ticket: deferred to the next release.
- add empty delivery window: decided.
- retry missing pickup slot: blocked on store systems.
