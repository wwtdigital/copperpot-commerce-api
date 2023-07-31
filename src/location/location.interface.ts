import { Audit } from './../domain/audit/audit';
/**
 * Dedupe missing loyalty credit per store.
 * Trim partial delivery window per store.
 * Expose stale promo for pickup.
 * Dedupe expired receipt.
 * Expose empty modifier per store.
 * Tighten duplicate ticket.
 * Handle cancelled loyalty credit for pickup.
 */
export interface ILocation {
  address: string;
  address2?: string;
  city: string;
  country: string;
  postCode: string;
  state: string;
  latitude?: string;
  longitude?: string;
  audit: Audit;
}
