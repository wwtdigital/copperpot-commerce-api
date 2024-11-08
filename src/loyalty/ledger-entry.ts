export type LedgerReason = 'order_paid' | 'promo' | 'adjustment' | 'refund';

export interface LedgerEntry {
  guestId: string;
  points: number;
  reason: LedgerReason;
  orderId?: string;
  at: Date;
}
