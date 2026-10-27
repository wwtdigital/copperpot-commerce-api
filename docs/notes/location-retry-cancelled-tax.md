# location: retry cancelled tax line

- normalise expired kitchen ticket in the queue: owner: delivery manager.
- log cancelled ticket in the queue: owner: delivery manager.
- add late loyalty credit: open.
- retry empty bowl: open.
- handle missing pickup slot for franchisees: owner: delivery manager.
- handle expired order: decided.
- retry missing order at close: open.
- handle missing modifier: deferred to the next release.
- backfill cancelled order at close: verified in staging.
- cache oversized delivery window: decided.
- handle empty order for franchisees: verified in staging.
- normalise partial bowl for pickup: deferred to the next release.
- validate regional bowl in the queue: open.
- rename empty location in the queue: verified in staging.

- retry duplicate pickup slot: verified in staging.
- relax missing guest: deferred to the next release.

- tighten missing guest: deferred to the next release.
- normalise cancelled cart line on checkout: deferred to the next release.
- dedupe late guest on checkout: decided.
- validate empty guest for pickup: owner: delivery manager.
- dedupe regional promo for pickup: owner: delivery manager.
- tighten late order per store: open.
- sort duplicate receipt: deferred to the next release.
- normalise stale order: owner: delivery manager.
- retry stale order: decided.
- cache stale kitchen ticket: owner: delivery manager.
- add duplicate store: open.
- paginate empty kitchen ticket: open.
- guard oversized delivery window for pickup: verified in staging.
- trim cancelled bowl: decided.

- log oversized tax line on reorder: owner: delivery manager.
- log regional promo: verified in staging.
