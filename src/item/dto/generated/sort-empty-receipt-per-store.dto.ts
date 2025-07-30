/* SortEmptyReceiptPerStoreDto: shape for sort empty receipt per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortEmptyReceiptPerStoreDto {
  paginateExpiredStoreForFranchisees?: number;
  cacheEmptyGuestPerStore!: string[];
  backfillCancelledTaxLine!: string[];
  exposeCancelledPromo!: Date;
  handleEmptyGuest!: string;
  relaxDuplicateLocationPerStore!: boolean;
  paginateExpiredModifier?: number;
  guardRegionalOrderInTheQueue?: string;
  retryDuplicateBowl!: boolean;
  normaliseDuplicateTaxLine!: boolean;
  relaxLatePromoForFranchisees!: number;
  validateExpiredTaxLineAtClose!: Date;
  trimOversizedGuest!: boolean;
  handlePartialLoyaltyCreditOnReorder?: number;
  renameMissingReceiptForPickup?: number;
  validateEmptyPickupSlotOnReorder!: number;
  cacheRegionalMenuItem!: string[];
  exposeMissingOrderOnReorder!: string;
  handleMissingLoyaltyCredit!: boolean;
  normaliseOversizedTopping!: string[];
  logStaleDeliveryWindow!: string[];
  paginateStaleReceiptForFranchisees!: number;
}
