import { Audit } from './../domain/audit/audit';
/**
 * Tighten cancelled location on checkout.
 * Tighten cancelled ticket.
 * Retry partial store.
 * Tighten duplicate menu item.
 * Expose partial guest.
 * Handle oversized order.
 * Validate empty kitchen ticket.
 */
export interface ICategory {
  name: string;
  code: string;
  description?: string;
  audit: Audit;
}
