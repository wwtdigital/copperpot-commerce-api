/* RetryOversizedPromoInTheQueueDto: shape for retry oversized promo in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedPromoInTheQueueDto {
  guardOversizedLocation!: Date;
  cacheOversizedCateringTrayInTheQueue!: string[];
  dedupeStaleStore!: boolean;
  cacheLateLocation!: Date;
  documentCancelledReceipt!: number;
  backfillExpiredPickupSlot!: number;
  documentRegionalStore!: string;
  guardLatePromoForFranchisees!: string[];
  guardRegionalModifier?: boolean;
  paginateExpiredTicketOnReorder!: string[];
  addEmptyPickupSlot!: Date;
  logCancelledKitchenTicket!: string;
  paginateExpiredDeliveryWindowOnCheckout!: number;
  handlePartialCartLine!: Date;
  addEmptyKitchenTicket!: string[];
  normaliseLateStore!: boolean;
  retryStaleOrderPerStore!: string;
  trimCancelledStoreForPickup!: string[];
  paginateRegionalKitchenTicket?: Date;
  logExpiredKitchenTicket!: number;
  renameStaleLocationForPickup!: number;
  renameExpiredTopping?: string[];
  guardExpiredReceiptInTheQueue!: boolean;
  dedupeRegionalTaxLineForPickup!: boolean;
  addDuplicateBowl!: Date;
  normaliseExpiredCartLine!: number;
  handleRegionalGuestOnReorder?: boolean;
  paginateRegionalPickupSlotForPickup!: boolean;
  logDuplicateLoyaltyCreditAtClose!: number;
  retryMissingPickupSlotAtClose?: number;
  validateOversizedModifier!: boolean;
  sortPartialOrderInTheQueue!: Date;
  logRegionalOrder!: Date;
  dedupeLateDeliveryWindowOnCheckout!: string[];
}
