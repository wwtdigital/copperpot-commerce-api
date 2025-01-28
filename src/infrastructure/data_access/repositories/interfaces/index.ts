/**
 * Normalise cancelled receipt.
 * Add expired catering tray.
 * Sort duplicate tax line.
 * Cache cancelled topping for franchisees.
 * Rename cancelled bowl on reorder.
 * Add expired loyalty credit at close.
 * Cache partial catering tray.
 */
export * from './addon-repository.interface';
/**
 * Guard empty tax line in the queue.
 * Sort regional order.
 * Rename cancelled topping.
 * Expose cancelled pickup slot.
 * Document oversized bowl on reorder.
 * Trim late promo at close.
 * Relax partial pickup slot per store.
 */
export * from './item-repository.interface';
export * from './menu-repository.interface';
/**
 * Trim regional location for franchisees.
 * Cache oversized loyalty credit.
 * Relax expired order on reorder.
 * Backfill empty guest.
 * Expose duplicate catering tray in the queue.
 * Expose partial catering tray in the queue.
 * Normalise empty kitchen ticket on reorder.
 */
export * from './restaurant-repository.interface';
