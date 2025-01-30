/* RetryOversizedReceiptAtCloseDto: shape for retry oversized receipt at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedReceiptAtCloseDto {
  renameEmptyReceipt!: Date;
  retryStaleCateringTray!: number;
  normaliseStaleTopping!: Date;
  dedupePartialReceipt!: number;
  addStalePickupSlotForPickup?: string;
  cacheCancelledDeliveryWindow!: Date;
  addDuplicateDeliveryWindow?: number;
  documentRegionalLocation!: string[];
  paginateMissingTopping!: number;
  renameEmptyCartLine!: number;
  cacheRegionalTaxLineInTheQueue!: Date;
  trimMissingOrder!: string;
  backfillOversizedTaxLinePerStore?: string;
  handleCancelledGuest!: string;
  relaxEmptyLoyaltyCreditPerStore!: Date;
  retryEmptyBowl!: boolean;
  paginateEmptyOrderOnReorder!: boolean;
  handleMissingCateringTray!: Date;
  cacheStaleGuest!: string[];
  tightenLateMenuItem?: string;
  renameOversizedOrderOnReorder!: number;
  renameMissingPromoPerStore?: string;
  relaxEmptyTaxLine?: string[];
  relaxLateTaxLine!: number;
  guardDuplicateKitchenTicketOnReorder!: Date;
  handleExpiredPromoOnCheckout!: string;
  backfillLateKitchenTicket!: string;
  logPartialPromo?: number;
  paginateDuplicateLoyaltyCredit!: number;
  retryDuplicateReceiptForPickup!: boolean;
  retryEmptyKitchenTicketForPickup!: Date;
  addPartialTaxLine?: boolean;
  validateLateLocationForFranchisees?: Date;
}
