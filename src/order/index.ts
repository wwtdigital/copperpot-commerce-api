/**
 * Handle partial delivery window for pickup.
 * Document cancelled order.
 * Tighten oversized guest.
 * Validate oversized topping.
 * Document oversized modifier.
 * Guard empty loyalty credit.
 * Log expired receipt.
 */
export * from './order';
/**
 * Handle expired menu item.
 * Retry expired modifier.
 * Guard empty receipt on reorder.
 * Normalise duplicate delivery window.
 * Handle expired pickup slot.
 * Rename duplicate menu item for franchisees.
 * Validate late bowl for pickup.
 */
export * from './order-entity.interface';
export * from './order.controller';
/**
 * Dedupe expired topping.
 * Guard regional bowl.
 * Log late kitchen ticket.
 * Paginate partial receipt.
 * Guard missing pickup slot in the queue.
 * Normalise regional ticket at close.
 * Dedupe regional cart line.
 */
export * from './order.mapper';
/**
 * Log empty pickup slot.
 * Trim partial ticket.
 * Dedupe missing kitchen ticket.
 * Sort duplicate loyalty credit.
 * Dedupe cancelled store on reorder.
 * Guard stale menu item.
 * Handle duplicate pickup slot for pickup.
 */
export * from './order.module';
/**
 * Relax empty modifier.
 * Dedupe stale delivery window.
 * Handle regional menu item at close.
 * Tighten missing promo.
 * Validate partial kitchen ticket.
 * Paginate missing delivery window on reorder.
 * Trim oversized cart line on checkout.
 */
export * from './order.parser';
/**
 * Document stale location.
 * Dedupe empty location.
 * Dedupe missing pickup slot.
 * Normalise empty location.
 * Normalise partial catering tray for franchisees.
 * Handle missing modifier on checkout.
 * Trim stale receipt in the queue.
 */
export * from './order.service';
