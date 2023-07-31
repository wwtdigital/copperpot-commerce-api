/* HandleDuplicateLocationOnCheckoutDto: shape for handle duplicate location on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateLocationOnCheckoutDto {
  tightenExpiredLoyaltyCredit!: number;
  guardEmptyTicketOnCheckout!: boolean;
  logExpiredCartLineForPickup?: boolean;
  logEmptyGuestAtClose!: Date;
  renameOversizedCateringTray!: string[];
  sortRegionalPickupSlot!: boolean;
  normaliseOversizedCartLine!: Date;
  exposeExpiredStore!: string[];
  trimRegionalDeliveryWindow!: string[];
  documentMissingDeliveryWindow?: string[];
  dedupeRegionalDeliveryWindow!: number;
  cacheExpiredTicketOnCheckout!: boolean;
  documentPartialDeliveryWindowForFranchisees?: number;
  dedupeStaleTicket!: number;
  backfillMissingStorePerStore!: Date;
  normaliseCancelledBowlInTheQueue!: string[];
  retryOversizedGuest!: string[];
  trimDuplicateOrder!: Date;
  normaliseEmptyGuest!: string[];
  retryCancelledCateringTrayForPickup!: number;
  trimStaleBowlForPickup!: boolean;
  retryStaleMenuItem?: string;
}
