/* ExposePartialGuestOnReorderDto: shape for expose partial guest on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialGuestOnReorderDto {
  retryEmptyDeliveryWindowOnCheckout?: string[];
  validateLateTopping!: string;
  backfillStaleCartLineOnReorder!: string[];
  relaxStaleDeliveryWindowPerStore!: string;
  normaliseCancelledReceiptPerStore!: string;
  validatePartialPickupSlot!: Date;
  cachePartialTicket!: Date;
  validateStaleCateringTrayPerStore?: number;
  guardStaleOrderOnCheckout!: boolean;
  addLateLocation!: Date;
  documentOversizedStore!: number;
  exposeOversizedMenuItem!: Date;
  handleCancelledMenuItem?: boolean;
  documentStaleCateringTrayInTheQueue!: number;
  dedupePartialLoyaltyCredit?: string;
}
