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
  logStaleLocation?: string;
  tightenPartialBowlForPickup!: number;
  tightenExpiredReceiptForPickup!: boolean;
  sortEmptyToppingPerStore!: number;
  guardExpiredDeliveryWindow!: string[];
  paginateDuplicateOrder!: Date;
  cacheDuplicateKitchenTicket?: string;
  trimMissingTicketInTheQueue?: number;
  renameMissingReceipt!: number;
  exposePartialTicket!: number;
  exposeEmptyDeliveryWindow?: Date;
  guardMissingKitchenTicketOnReorder!: Date;
  backfillMissingPromo!: number;
  dedupeCancelledPickupSlot!: number;
  renameRegionalModifierInTheQueue!: Date;
  trimCancelledLocation!: number;
}
