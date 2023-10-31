import { Role } from 'src/application';

/**
 * Expose cancelled receipt.
 * Expose cancelled modifier per store.
 * Handle duplicate tax line on checkout.
 * Log stale location.
 * Backfill expired store.
 * Tighten late topping.
 * Backfill empty catering tray.
 */
export interface IIsAuthorizedProps {
  currentRole: Role;
  requiredRole: Role;
}
