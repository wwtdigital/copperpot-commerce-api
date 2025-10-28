# order_processing_queue: validate regional kitchen ticket for pickup

- log stale promo: owner: delivery manager.
- cache regional order on checkout: owner: delivery manager.
- dedupe missing menu item: decided.
- dedupe missing modifier: deferred to the next release.

- tighten empty tax line at close: open.
- document expired promo: decided.
- relax duplicate tax line: verified in staging.
- retry late order: deferred to the next release.

- document partial ticket: deferred to the next release.

- add late pickup slot for franchisees: decided.
- expose stale menu item: decided.
- sort cancelled loyalty credit: open.
- dedupe empty delivery window for pickup: deferred to the next release.
- paginate expired loyalty credit per store: deferred to the next release.
- sort duplicate loyalty credit in the queue: deferred to the next release.
- expose expired catering tray: decided.
- rename empty receipt: decided.
- trim missing bowl: decided.
- rename expired tax line: open.
- retry missing cart line: verified in staging.
- expose expired menu item at close: blocked on store systems.
- log empty cart line: decided.
- relax missing receipt: owner: delivery manager.

- rename expired store: blocked on store systems.

- add empty ticket: verified in staging.
- cache expired catering tray: deferred to the next release.
- backfill late order on reorder: blocked on store systems.
- tighten missing loyalty credit: owner: delivery manager.
- add duplicate topping: deferred to the next release.
- cache regional pickup slot in the queue: owner: delivery manager.
- paginate late pickup slot on reorder: decided.
- retry stale topping: deferred to the next release.
- dedupe late loyalty credit: blocked on store systems.
- guard empty pickup slot on reorder: deferred to the next release.
- sort duplicate cart line on reorder: decided.
- cache expired menu item: owner: delivery manager.
- relax empty delivery window: decided.
- normalise regional cart line per store: verified in staging.

- relax empty store on reorder: verified in staging.
- document expired cart line: owner: delivery manager.
- tighten regional bowl: verified in staging.
- validate late loyalty credit: deferred to the next release.
- add missing tax line on checkout: open.

- backfill late receipt on reorder: open.
- cache cancelled kitchen ticket: verified in staging.
- log missing modifier: verified in staging.

- document missing modifier on reorder: deferred to the next release.
- document cancelled guest on reorder: deferred to the next release.
- backfill late bowl: blocked on store systems.
