/* TightenMissingLocationForPickupDto: shape for tighten missing location for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenMissingLocationForPickupDto {
  handleStaleReceiptPerStore?: boolean;
  paginateLateStoreForFranchisees?: string;
  sortPartialTicket!: number;
  renameRegionalModifierForPickup?: string[];
  relaxLateStorePerStore?: Date;
  paginateMissingCateringTrayAtClose!: number;
  documentMissingLoyaltyCredit?: string[];
  backfillEmptyPickupSlotAtClose!: boolean;
  retryEmptyDeliveryWindowAtClose!: string[];
  exposeStaleOrder?: Date;
  relaxRegionalPromoOnCheckout!: string[];
  handleOversizedStore!: string[];
  trimCancelledReceipt!: Date;
}
