/* RelaxStalePromoPerStoreDto: shape for relax stale promo per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxStalePromoPerStoreDto {
  normaliseOversizedTaxLineOnCheckout!: string;
  documentRegionalPickupSlotForFranchisees!: string[];
  paginateDuplicateTicket!: string[];
  validateEmptyPromo?: number;
}
