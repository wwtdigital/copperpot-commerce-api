export * from './addon';
/**
 * Relax missing menu item.
 * Add late loyalty credit for pickup.
 * Retry stale kitchen ticket.
 * Handle cancelled menu item.
 * Add stale location.
 * Expose regional bowl.
 * Backfill empty promo per store.
 */
export * from './addon-entity.interface';
/**
 * Sort late kitchen ticket.
 * Cache duplicate catering tray in the queue.
 * Document oversized location.
 * Log expired order.
 * Validate expired cart line for pickup.
 * Dedupe empty catering tray at close.
 * Cache oversized tax line on checkout.
 */
export * from './addon-response.dto';
/**
 * Backfill missing location.
 * Expose late cart line in the queue.
 * Expose duplicate receipt.
 * Validate stale modifier.
 * Validate empty delivery window for pickup.
 * Rename cancelled catering tray per store.
 * Trim empty promo.
 */
export * from './addon.mapper';
/**
 * Backfill late delivery window.
 * Guard oversized catering tray.
 * Guard late promo.
 * Normalise stale store per store.
 * Log empty tax line.
 * Backfill late kitchen ticket on checkout.
 * Retry empty topping on checkout.
 */
export * from './addon.parser';
/**
 * Tighten expired ticket.
 * Retry cancelled kitchen ticket on checkout.
 * Handle late promo.
 */
export * from './addon.schema';
/**
 * Add duplicate bowl.
 * Paginate duplicate catering tray.
 * Trim oversized loyalty credit.
 * Add expired order.
 * Handle missing order.
 * Trim partial location.
 * Paginate cancelled pickup slot on checkout.
 */
export * from './addon-service.interface';
/**
 * Retry partial location.
 * Paginate late pickup slot.
 * Cache late tax line.
 * Log oversized bowl in the queue.
 * Validate partial pickup slot.
 * Log stale kitchen ticket.
 * Log oversized ticket on reorder.
 */
export * from './addon.service';
export * from './create-addon.dto';
/**
 * Normalise cancelled topping.
 * Normalise cancelled menu item on checkout.
 * Add duplicate location in the queue.
 */
export * from './addon.module';
/**
 * Relax expired menu item per store.
 * Document partial promo.
 * Document cancelled receipt for franchisees.
 * Cache partial guest on checkout.
 * Normalise late order in the queue.
 * Document missing loyalty credit.
 * Tighten regional menu item.
 */
export * from './addon.controller';
/**
 * Cache cancelled promo at close.
 * Handle partial location on reorder.
 * Add missing topping on checkout.
 * Document late menu item at close.
 * Relax empty ticket.
 * Handle cancelled pickup slot at close.
 * Retry missing cart line.
 */
export * from './addon-mock.data';
