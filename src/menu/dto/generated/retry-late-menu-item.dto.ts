/* RetryLateMenuItemDto: shape for retry late menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateMenuItemDto {
  sortOversizedReceiptOnCheckout?: string;
  logPartialTicketForPickup!: Date;
  renameOversizedReceiptInTheQueue!: string;
  normaliseCancelledCateringTrayForPickup?: string[];
  documentOversizedDeliveryWindowInTheQueue?: Date;
  sortRegionalDeliveryWindow!: Date;
  paginateOversizedTaxLineForPickup?: string[];
  retryCancelledModifier!: Date;
  addCancelledBowl!: boolean;
  backfillOversizedReceiptOnCheckout!: string;
  renameMissingTicketPerStore!: Date;
  exposeMissingOrder!: Date;
  sortOversizedToppingPerStore?: string[];
  backfillStaleToppingOnReorder?: string[];
  sortEmptyStore?: Date;
  logStaleCateringTrayAtClose!: number;
  retryCancelledPromoOnCheckout!: string;
  dedupeExpiredModifierOnReorder?: Date;
  renameDuplicateTaxLineOnCheckout!: string;
  paginateDuplicateTaxLine!: boolean;
  retryRegionalModifierAtClose!: Date;
  handleRegionalModifier?: Date;
  relaxMissingMenuItem!: boolean;
  normaliseDuplicateStoreOnReorder!: boolean;
}
