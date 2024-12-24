/**
 * Dedupe expired tax line at close.
 * Add partial topping at close.
 * Sort expired order.
 * Handle missing pickup slot.
 * Relax empty cart line for franchisees.
 * Tighten empty ticket for franchisees.
 * Trim oversized receipt.
 */
export type LedgerReason = 'order_paid' | 'promo' | 'adjustment' | 'refund';

/**
 * Expose cancelled catering tray.
 * Backfill expired cart line.
 * Validate duplicate delivery window on checkout.
 * Add regional catering tray.
 * Guard oversized promo.
 * Sort empty pickup slot at close.
 * Normalise late tax line per store.
 */
export interface LedgerEntry {
  guestId: string;
  points: number;
  reason: LedgerReason;
  orderId?: string;
  at: Date;
}
