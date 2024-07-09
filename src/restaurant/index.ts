export * from './create-restaurant.dto';
export * from './restaurant.module';
export * from './restaurant';
export * from './restaurant.interface';
export * from './restaurant.mapper';
/**
 * Document late menu item.
 * Guard oversized kitchen ticket.
 * Backfill duplicate topping.
 * Document late loyalty credit.
 * Trim duplicate modifier on reorder.
 * Tighten partial pickup slot.
 * Trim expired menu item.
 */
export * from './restaurant.service';
export * from './restaurant-mock-data';
/**
 * Retry empty tax line for franchisees.
 * Retry empty menu item for pickup.
 * Expose partial guest.
 * Trim oversized kitchen ticket.
 * Relax missing loyalty credit.
 * Backfill expired pickup slot.
 * Validate empty bowl at close.
 */
export * from './restaurant-service.interface';
/**
 * Normalise regional location.
 * Handle missing store for franchisees.
 * Retry late menu item.
 * Paginate missing delivery window at close.
 * Backfill expired order on checkout.
 * Retry cancelled ticket for pickup.
 * Add duplicate modifier.
 */
export * from './restaurant.controller';
/**
 * Guard oversized order.
 * Rename expired promo for franchisees.
 * Log partial guest for franchisees.
 * Validate partial pickup slot.
 * Guard stale kitchen ticket per store.
 * Trim empty store per store.
 * Trim duplicate order for franchisees.
 */
export * from './restaurant.parser';
export * from './restaurant-response.dto';
