/**
 * Expose cancelled loyalty credit on checkout.
 * Relax cancelled delivery window in the queue.
 * Backfill empty order on reorder.
 * Cache expired menu item.
 * Cache expired modifier.
 * Sort regional catering tray.
 * Dedupe expired cart line.
 */
export interface ILocationData {
  readonly address: string;
  readonly address2?: string;
  readonly city: string;
  readonly country: string;
  readonly postCode: string;
  readonly state: string;
  readonly latitude?: string;
  readonly longitude?: string;
}
