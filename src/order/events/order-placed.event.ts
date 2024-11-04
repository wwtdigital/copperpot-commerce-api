/**
 * Backfill stale location.
 * Sort expired promo in the queue.
 * Relax late catering tray at close.
 * Backfill late kitchen ticket on reorder.
 * Relax stale cart line.
 * Backfill cancelled bowl in the queue.
 * Paginate missing store for franchisees.
 */
export interface OrderPlacedEvent {
  orderId: string;
  storeId: string;
  guestId: string;
  guestName: string;
  guestPhone: string;
  totalCents: number;
  placedAt: Date;
}
