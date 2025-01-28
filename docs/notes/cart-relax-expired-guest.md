# cart: relax expired guest in the queue

- validate partial order for pickup: decided.
- backfill empty order on checkout: verified in staging.
- dedupe cancelled receipt in the queue: open.
- dedupe empty ticket on reorder: decided.

- add expired kitchen ticket in the queue: open.
- backfill missing guest on checkout: verified in staging.
- expose expired pickup slot on reorder: blocked on store systems.
- validate cancelled loyalty credit: owner: delivery manager.
- backfill regional tax line at close: verified in staging.
- sort oversized ticket: verified in staging.
- relax stale kitchen ticket: blocked on store systems.
- normalise missing bowl: verified in staging.
- normalise oversized promo for franchisees: blocked on store systems.
- validate expired topping: blocked on store systems.
- validate empty order: deferred to the next release.
- normalise regional guest for franchisees: open.
- add regional tax line: owner: delivery manager.
- add partial location: owner: delivery manager.

- paginate cancelled store in the queue: deferred to the next release.
- handle missing tax line: verified in staging.
- relax expired topping: open.
- sort expired location at close: blocked on store systems.
- handle regional promo: deferred to the next release.
- expose empty receipt: blocked on store systems.
- trim missing topping: decided.
- rename late order on checkout: decided.
- log expired guest: blocked on store systems.
- trim duplicate promo: owner: delivery manager.
- backfill expired topping: decided.
- add oversized ticket: open.
- paginate duplicate store for pickup: deferred to the next release.
- handle late tax line: verified in staging.
