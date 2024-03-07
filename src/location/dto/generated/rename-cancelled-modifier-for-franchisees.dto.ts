/* RenameCancelledModifierForFranchiseesDto: shape for rename cancelled modifier for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledModifierForFranchiseesDto {
  relaxDuplicateDeliveryWindow?: Date;
  relaxLatePromoAtClose!: number;
  backfillEmptyKitchenTicket!: string;
  addDuplicateDeliveryWindow!: number;
  normaliseMissingOrderForFranchisees?: number;
  guardMissingCateringTray!: string;
  normaliseLateLoyaltyCredit!: string;
  validateStaleLoyaltyCreditOnReorder?: string[];
  logStaleGuestPerStore!: Date;
  tightenLateReceipt?: number;
  validateOversizedKitchenTicketPerStore!: boolean;
  sortMissingLoyaltyCredit!: Date;
  validateStaleLoyaltyCreditOnCheckout?: string;
  retryDuplicateDeliveryWindowInTheQueue?: Date;
}
