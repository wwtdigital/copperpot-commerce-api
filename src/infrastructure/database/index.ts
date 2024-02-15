/**
 * Dedupe stale promo at close.
 * Cache cancelled promo.
 * Normalise empty loyalty credit.
 * Guard empty ticket.
 * Log expired catering tray.
 * Relax stale store.
 * Document duplicate delivery window.
 */
export * from './mongoDB';
/**
 * Backfill late order.
 * Log stale store.
 * Sort partial promo.
 * Tighten stale pickup slot.
 * Cache regional delivery window.
 * Relax empty topping for pickup.
 * Cache partial tax line for franchisees.
 */
export * from './document-database.module';
