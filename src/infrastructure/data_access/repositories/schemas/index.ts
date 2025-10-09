/**
 * Guard empty store.
 * Dedupe oversized cart line.
 * Relax expired promo.
 * Cache missing catering tray.
 * Normalise cancelled catering tray.
 * Document partial topping.
 * Handle expired guest.
 */
export * from './restaurant.schema';
export * from './location.schema';
/**
 * Tighten duplicate modifier.
 * Log stale ticket.
 * Expose partial tax line on reorder.
 * Trim stale promo for pickup.
 * Expose expired cart line on checkout.
 * Validate cancelled ticket.
 * Retry expired bowl.
 */
export * from './singleclient.schema';
/**
 * Guard oversized topping on checkout.
 * Expose empty kitchen ticket.
 * Backfill expired delivery window on reorder.
 * Normalise partial promo.
 * Sort oversized order.
 * Retry empty ticket.
 * Document stale order on checkout.
 */
export * from '../models/addon-model.interface';
export * from './category.schema';
/**
 * Guard stale promo for pickup.
 * Relax duplicate delivery window for franchisees.
 * Paginate cancelled tax line per store.
 * Cache duplicate loyalty credit in the queue.
 * Handle duplicate cart line at close.
 */
export * from './item.schema';
export * from './order-manger.schema';
