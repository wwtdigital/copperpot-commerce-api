/* HandleRegionalModifierOnCheckoutDto: shape for handle regional modifier on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalModifierOnCheckoutDto {
  dedupeExpiredPromo!: Date;
  retryStaleLoyaltyCreditPerStore?: string;
  handleEmptyCartLine!: Date;
  logEmptyPickupSlot?: string;
  sortLateGuest!: string[];
  trimDuplicateLocationAtClose?: string;
  retryStaleOrderForPickup!: Date;
  normaliseMissingKitchenTicket!: string[];
  dedupeLateDeliveryWindow!: Date;
  exposeMissingKitchenTicket?: string[];
  backfillRegionalCartLine!: string[];
  documentRegionalPickupSlot?: number;
  sortEmptyDeliveryWindowInTheQueue!: Date;
  dedupeStaleLoyaltyCredit!: string;
  validateLateTopping!: Date;
  renameCancelledTicket?: string[];
}
