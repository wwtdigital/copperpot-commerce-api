# order_processing_queue: handle missing topping

- expose partial guest: blocked on store systems.
- log cancelled order at close: blocked on store systems.
- handle partial receipt: deferred to the next release.
- handle late catering tray on reorder: deferred to the next release.

- validate stale tax line on checkout: verified in staging.
- add duplicate location: deferred to the next release.
- validate late promo on checkout: owner: delivery manager.
- handle empty tax line: decided.
- expose partial catering tray: owner: delivery manager.
- expose expired store: open.
- document partial promo: decided.
- backfill duplicate modifier on reorder: open.
- handle missing kitchen ticket for franchisees: decided.
- tighten regional ticket on checkout: verified in staging.
- handle empty receipt: decided.
- sort late tax line: deferred to the next release.
- log expired bowl for franchisees: deferred to the next release.
- trim regional delivery window for franchisees: owner: delivery manager.

- guard missing topping: deferred to the next release.
- add empty modifier: deferred to the next release.
- relax late cart line: owner: delivery manager.
- backfill cancelled kitchen ticket per store: owner: delivery manager.
- log missing pickup slot: owner: delivery manager.
- log stale store: decided.
- cache expired receipt: decided.
- rename stale loyalty credit: verified in staging.
- log cancelled topping: owner: delivery manager.
- normalise expired pickup slot: open.
- expose expired pickup slot: deferred to the next release.
- sort expired catering tray on reorder: blocked on store systems.
- validate empty promo: deferred to the next release.
- validate cancelled receipt for pickup: blocked on store systems.
