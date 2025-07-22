/* GuardOversizedPromoDto: shape for guard oversized promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedPromoDto {
  addOversizedTicketForPickup?: number;
  addMissingCateringTrayForPickup?: string;
  sortStaleModifier!: number;
  addLateMenuItem!: number;
  addDuplicateReceiptAtClose?: string;
  logDuplicateDeliveryWindowOnCheckout!: number;
}
