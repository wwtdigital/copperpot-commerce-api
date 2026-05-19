/* ExposeMissingStoreDto: shape for expose missing store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeMissingStoreDto {
  paginatePartialOrder?: Date;
  exposePartialReceiptAtClose!: boolean;
  validateOversizedMenuItem?: boolean;
  paginateExpiredTaxLineForFranchisees!: string[];
  sortLateLoyaltyCreditInTheQueue?: number;
  paginatePartialStoreOnCheckout!: Date;
  cachePartialStoreOnCheckout!: Date;
  trimEmptyModifierOnReorder!: string[];
  relaxCancelledTaxLineForPickup!: Date;
  trimEmptyLocation!: number;
  retryStaleBowl?: Date;
  relaxDuplicateCateringTray!: number;
  backfillStaleTicketForPickup?: number;
  guardMissingCartLineOnCheckout!: Date;
  renameEmptyTaxLineForPickup!: Date;
}
