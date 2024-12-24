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
