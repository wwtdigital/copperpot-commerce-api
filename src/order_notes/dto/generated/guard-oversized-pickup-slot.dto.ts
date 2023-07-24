/* GuardOversizedPickupSlotDto: shape for guard oversized pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedPickupSlotDto {
  dedupeOversizedCartLine!: boolean;
  relaxCancelledCateringTray!: number;
  cacheMissingReceipt!: string[];
  cacheEmptyKitchenTicket!: boolean;
  handleDuplicatePromoOnCheckout!: number;
  retryOversizedTaxLineOnReorder!: Date;
  tightenExpiredReceiptInTheQueue!: string;
  exposePartialMenuItem!: Date;
  dedupeRegionalTopping?: Date;
  guardMissingDeliveryWindowForPickup!: string;
  sortDuplicateBowl!: string[];
  normaliseRegionalReceipt!: boolean;
  backfillExpiredOrder!: string[];
  relaxCancelledStorePerStore?: boolean;
  backfillStaleStoreAtClose?: string[];
  renameDuplicateGuest!: boolean;
  exposeMissingTicketPerStore!: number;
  dedupeOversizedPromoForFranchisees!: string;
}
