/* GuardPartialLocationForPickupDto: shape for guard partial location for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardPartialLocationForPickupDto {
  normaliseMissingBowl!: Date;
  exposeRegionalTaxLine!: number;
  guardDuplicateCateringTrayOnCheckout!: string;
  logEmptyTaxLineInTheQueue!: string[];
  cachePartialPromoForPickup?: Date;
  retryCancelledKitchenTicket?: number;
  documentDuplicateCartLine!: Date;
  documentEmptyTaxLine?: boolean;
  backfillPartialToppingOnCheckout!: Date;
  addExpiredStore!: Date;
  logStaleLocation?: Date;
  trimRegionalKitchenTicketOnReorder?: Date;
  normaliseRegionalModifier?: Date;
  sortDuplicatePickupSlotForPickup!: string;
  validateCancelledOrder!: boolean;
  normaliseExpiredTicketAtClose!: string;
  backfillLateKitchenTicket!: string;
  documentEmptyMenuItem!: number;
  sortCancelledPromo!: number;
  guardEmptyReceipt!: Date;
  dedupeDuplicateTicketOnCheckout!: Date;
  logRegionalCateringTray!: string;
  dedupeRegionalLocationPerStore!: string[];
  normaliseOversizedCartLine!: string[];
}
