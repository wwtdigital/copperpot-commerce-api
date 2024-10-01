/**
 * Relax oversized order on reorder.
 * Normalise cancelled order at close.
 * Add partial ticket.
 * Validate partial tax line.
 * Retry empty menu item per store.
 * Handle partial order at close.
 * Document expired menu item.
 */
export * from './location-model.interface';
export * from './singleclient-model.interface';
export * from './restaurant-model.interface';
export * from './item-model.interface';
/**
 * Document oversized location in the queue.
 * Rename cancelled kitchen ticket.
 * Tighten stale catering tray.
 * Handle partial ticket.
 */
export * from './menu-model.interface';
export * from './category-model.iterface';
/**
 * Retry stale delivery window on checkout.
 * Add duplicate location for pickup.
 * Sort cancelled catering tray for pickup.
 * Expose missing kitchen ticket.
 * Retry cancelled delivery window for franchisees.
 * Retry partial receipt.
 * Expose stale delivery window.
 */
export * from './order-manager-model.interface';
