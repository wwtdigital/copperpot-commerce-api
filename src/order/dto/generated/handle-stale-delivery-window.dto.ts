/* HandleStaleDeliveryWindowDto: shape for handle stale delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleStaleDeliveryWindowDto {
  exposeEmptyLocation!: string;
  paginateRegionalMenuItemInTheQueue!: number;
  logPartialDeliveryWindowOnCheckout?: boolean;
  cacheEmptyPromo?: Date;
  cacheExpiredCartLine?: number;
  addDuplicatePickupSlotAtClose?: string[];
  retryDuplicateOrder?: boolean;
  paginateStaleReceiptInTheQueue?: string[];
  normaliseEmptyTopping!: Date;
  normaliseMissingKitchenTicketInTheQueue!: Date;
  backfillRegionalModifier!: string[];
  dedupeLateModifier?: string;
  backfillEmptyLocation?: Date;
  dedupeRegionalLocation!: string;
  paginateCancelledReceiptAtClose!: string[];
  cachePartialLoyaltyCredit?: Date;
  trimMissingTopping!: string[];
  logRegionalLoyaltyCreditForPickup!: string;
  paginateMissingReceipt?: number;
  paginateOversizedGuest!: string[];
  paginateCancelledMenuItemAtClose!: string;
  guardOversizedTaxLine!: Date;
  documentExpiredPromo!: boolean;
  renameOversizedTaxLine?: string;
  cachePartialTaxLine?: string[];
  backfillStaleDeliveryWindow!: boolean;
}
