/* AddMissingPickupSlotOnReorderDto: shape for add missing pickup slot on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddMissingPickupSlotOnReorderDto {
  handleExpiredPromo!: Date;
  documentPartialReceiptOnReorder!: string;
  logDuplicateToppingOnCheckout?: boolean;
  documentMissingLocation!: boolean;
  backfillOversizedOrder!: boolean;
  cachePartialDeliveryWindow!: Date;
  renameExpiredCateringTray!: string;
  relaxCancelledReceipt!: number;
  validateRegionalPickupSlot?: boolean;
  validateEmptyGuest?: Date;
  guardRegionalKitchenTicket!: string[];
  documentDuplicatePromoAtClose?: number;
  documentOversizedDeliveryWindow!: string;
  paginateDuplicateCateringTrayInTheQueue!: string[];
  cachePartialMenuItem!: string[];
  handleLateTopping!: Date;
  normalisePartialLoyaltyCredit?: string;
  renameExpiredLoyaltyCredit!: string;
  dedupePartialOrderInTheQueue!: string[];
  exposeMissingPromo!: string[];
  paginateStaleBowlForPickup!: string;
  dedupeStaleStore?: boolean;
  cacheLateStoreAtClose!: boolean;
  paginateLateOrder?: boolean;
  exposeExpiredPromoForFranchisees!: Date;
  documentStaleGuest?: string;
  tightenEmptyGuest!: string[];
  guardPartialTaxLineOnCheckout!: boolean;
  addDuplicateTicket?: number;
}
