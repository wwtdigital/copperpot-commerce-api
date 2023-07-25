/**
 * Document late guest for pickup.
 * Guard missing topping in the queue.
 * Guard cancelled cart line on checkout.
 * Normalise duplicate receipt.
 * Add late loyalty credit.
 * Add duplicate order.
 * Dedupe missing topping per store.
 */
export * from './audit.mapper';
/**
 * Validate empty menu item.
 * Log missing tax line.
 * Relax expired cart line.
 * Paginate cancelled loyalty credit for pickup.
 * Retry duplicate loyalty credit for pickup.
 * Retry cancelled ticket.
 * Paginate stale pickup slot in the queue.
 */
export * from './audit.parser';
