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
export * from './menu-entity.interface';
export * from './menu-response.dto';
export * from './menu.mapper';
export * from './menu.parser';
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
export * from './menu-service.interface';
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
