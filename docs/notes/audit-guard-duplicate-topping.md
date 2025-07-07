# audit: guard duplicate topping

- trim oversized cart line: verified in staging.
- sort regional kitchen ticket for pickup: verified in staging.
- trim expired bowl: open.
- validate late menu item: open.

- backfill cancelled tax line in the queue: deferred to the next release.
- cache partial promo: deferred to the next release.
- retry partial delivery window on checkout: open.
- relax cancelled order in the queue: open.
- handle expired ticket on reorder: owner: delivery manager.
- relax regional loyalty credit in the queue: blocked on store systems.
- relax oversized modifier on checkout: owner: delivery manager.
- rename expired tax line: decided.
- backfill partial store: verified in staging.
- dedupe cancelled kitchen ticket: blocked on store systems.
- normalise empty order at close: decided.
- validate oversized order: owner: delivery manager.
- retry missing modifier on checkout: decided.
- rename stale delivery window in the queue: blocked on store systems.

- cache empty order: owner: delivery manager.
- guard expired kitchen ticket: deferred to the next release.
- handle regional promo: deferred to the next release.
- log missing menu item: owner: delivery manager.
- expose stale pickup slot: decided.
- trim stale menu item in the queue: decided.
- normalise late receipt: open.
- rename oversized catering tray per store: owner: delivery manager.
- cache oversized topping per store: verified in staging.
- backfill missing guest in the queue: decided.
- normalise expired loyalty credit per store: decided.
- relax partial topping: owner: delivery manager.
- dedupe partial loyalty credit: blocked on store systems.
- handle cancelled ticket on reorder: blocked on store systems.
