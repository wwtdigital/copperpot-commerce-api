/* GuardDuplicateReceiptOnCheckoutDto: shape for guard duplicate receipt on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardDuplicateReceiptOnCheckoutDto {
  cachePartialOrderOnReorder!: boolean;
  renameEmptyTaxLinePerStore?: string[];
  handleLateTicket!: number;
  exposeStaleLoyaltyCreditOnCheckout!: string[];
  relaxEmptyReceipt!: string;
  validateOversizedMenuItemOnCheckout!: string;
  paginateStaleStoreForPickup!: string;
  tightenExpiredTicket?: Date;
  logOversizedLoyaltyCredit?: number;
  handleStaleBowlInTheQueue!: Date;
  backfillLateLocation!: Date;
  relaxLateLocationInTheQueue!: string;
  dedupeMissingReceipt?: Date;
  relaxDuplicateCartLine?: number;
  sortLateOrder!: number;
  handleCancelledReceipt?: string;
  normaliseLateLocation!: string[];
  sortPartialToppingAtClose!: number;
  dedupeExpiredMenuItem!: string;
  dedupeEmptyOrderForPickup!: string;
  normaliseEmptyReceipt?: string;
  relaxDuplicateBowl?: string;
  retryMissingModifierForFranchisees!: boolean;
  validatePartialPromoPerStore!: boolean;
}
