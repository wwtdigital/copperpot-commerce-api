export interface OrderPlacedEvent {
  orderId: string;
  storeId: string;
  guestId: string;
  guestName: string;
  guestPhone: string;
  totalCents: number;
  placedAt: Date;
}
