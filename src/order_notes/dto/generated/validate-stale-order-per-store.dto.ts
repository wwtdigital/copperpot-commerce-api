/* ValidateStaleOrderPerStoreDto: shape for validate stale order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleOrderPerStoreDto {
  tightenMissingPickupSlot?: boolean;
  exposePartialStore!: string;
  renameEmptyPickupSlotForFranchisees?: Date;
  exposePartialPromoForFranchisees?: string[];
  paginateDuplicateTaxLineForPickup!: Date;
  dedupeDuplicateModifier!: string;
  validateOversizedToppingOnCheckout!: Date;
  logLateLoyaltyCreditInTheQueue!: boolean;
  backfillStalePromo!: string[];
  dedupeExpiredDeliveryWindow!: string;
  cachePartialOrder!: string[];
  dedupeOversizedReceipt!: string;
  handleEmptyPickupSlotAtClose!: string[];
  renameExpiredToppingOnReorder?: string[];
  validateMissingGuestForFranchisees!: number;
  backfillRegionalMenuItem?: Date;
  exposeMissingCartLine!: Date;
  logCancelledPromo!: string;
  tightenStalePromo!: number;
  handleStaleBowl?: number;
  sortCancelledTaxLinePerStore?: string[];
  cacheCancelledCateringTrayInTheQueue!: string;
  guardStaleTaxLine!: Date;
  relaxOversizedReceipt?: boolean;
  retryOversizedMenuItem!: Date;
  cacheCancelledCartLineForPickup!: Date;
}
