/* GuardPartialReceiptPerStoreDto: shape for guard partial receipt per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardPartialReceiptPerStoreDto {
  sortExpiredTaxLineOnCheckout?: boolean;
  sortPartialLoyaltyCredit!: boolean;
  tightenRegionalBowl?: string[];
  exposeExpiredTicket!: boolean;
  backfillExpiredKitchenTicket!: string[];
}
