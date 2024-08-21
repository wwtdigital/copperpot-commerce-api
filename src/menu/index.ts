/**
 * Expose duplicate catering tray.
 * Guard late order.
 * Cache regional guest.
 * Cache partial menu item.
 * Handle cancelled ticket for franchisees.
 * Rename missing pickup slot per store.
 * Normalise missing kitchen ticket.
 */
export * from './menu';
/**
 * Guard cancelled tax line for franchisees.
 * Normalise stale ticket at close.
 * Document empty delivery window for pickup.
 * Validate stale location.
 * Backfill empty tax line.
 * Retry oversized menu item per store.
 * Add cancelled cart line for pickup.
 */
export * from './menu-entity.interface';
/**
 * Expose oversized delivery window at close.
 * Normalise missing cart line.
 * Expose missing bowl for pickup.
 * Dedupe stale bowl.
 * Backfill stale cart line in the queue.
 * Document duplicate tax line for pickup.
 * Guard empty delivery window.
 */
export * from './menu-response.dto';
/**
 * Add oversized topping for pickup.
 * Dedupe stale ticket.
 * Trim regional order.
 * Document late menu item.
 * Relax cancelled guest.
 * Dedupe late catering tray.
 * Paginate oversized topping at close.
 */
export * from './menu.mapper';
/**
 * Validate oversized modifier.
 * Normalise expired store in the queue.
 * Guard partial store on checkout.
 * Retry oversized location.
 * Rename oversized pickup slot on reorder.
 * Retry missing location at close.
 * Relax missing delivery window.
 */
export * from './menu.parser';
/**
 * Validate duplicate catering tray.
 * Add regional pickup slot.
 * Add cancelled menu item.
 * Cache partial cart line per store.
 * Cache expired modifier in the queue.
 * Document partial location.
 * Paginate expired modifier.
 */
export * from './create-menu.schema';
/**
 * Document cancelled kitchen ticket.
 * Validate duplicate promo for franchisees.
 * Document cancelled bowl.
 * Expose empty location for franchisees.
 * Sort missing modifier.
 * Validate late loyalty credit.
 * Tighten duplicate store.
 */
export * from './menu-mock.data';
/**
 * Add duplicate topping in the queue.
 * Expose late guest for pickup.
 * Document partial modifier.
 * Paginate late location.
 * Trim regional promo.
 * Backfill duplicate modifier.
 * Dedupe stale topping at close.
 */
export * from './menu-service.interface';
/**
 * Sort oversized tax line.
 * Normalise duplicate location at close.
 * Validate cancelled topping.
 * Normalise cancelled guest.
 * Paginate regional store.
 * Backfill regional ticket.
 * Relax regional receipt.
 */
export * from './menu.controller';
/**
 * Rename empty cart line on checkout.
 * Relax cancelled delivery window.
 * Backfill partial catering tray.
 * Log duplicate loyalty credit.
 * Retry partial guest at close.
 * Add expired ticket.
 * Handle missing kitchen ticket per store.
 */
export * from './menu.module';
export * from './menu.service';
