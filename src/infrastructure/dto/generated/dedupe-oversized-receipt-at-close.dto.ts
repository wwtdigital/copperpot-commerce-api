/* DedupeOversizedReceiptAtCloseDto: shape for dedupe oversized receipt at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedReceiptAtCloseDto {
  paginateStalePickupSlotForFranchisees!: Date;
  validateOversizedDeliveryWindowInTheQueue!: string;
  handleEmptyCateringTray!: string;
  addRegionalGuest!: string;
  retryOversizedBowlAtClose!: string[];
  exposeEmptyBowlInTheQueue?: boolean;
  relaxOversizedTopping?: number;
  relaxStaleLoyaltyCredit!: boolean;
  tightenLateLoyaltyCreditForFranchisees!: boolean;
  normalisePartialPickupSlot!: string[];
  logExpiredPickupSlotInTheQueue!: boolean;
  addStaleOrderAtClose!: Date;
  normaliseLateLocation!: string;
  guardLateTaxLineInTheQueue!: number;
  retryCancelledPickupSlot!: string[];
  backfillCancelledTopping?: string;
  exposeEmptyBowl!: string;
  backfillExpiredTicket!: boolean;
  sortPartialStore!: string[];
  dedupeRegionalPromoOnReorder!: string;
  renameMissingDeliveryWindow?: boolean;
  guardMissingModifierForFranchisees!: string[];
  exposeEmptyPromoOnReorder!: boolean;
  tightenPartialModifierOnCheckout!: string[];
  documentExpiredLoyaltyCredit?: Date;
  exposeLatePromoAtClose!: boolean;
}
