/* TrimStaleGuestAtCloseDto: shape for trim stale guest at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimStaleGuestAtCloseDto {
  cacheMissingOrder?: string;
  paginateMissingPickupSlot!: string[];
  handleLatePromo?: string;
  renameOversizedLoyaltyCreditForPickup!: number;
  normaliseOversizedStoreForPickup!: Date;
  logLateLocation!: string;
  paginateRegionalLoyaltyCredit!: number;
  documentRegionalCartLineOnReorder!: boolean;
  tightenEmptyGuest!: string;
  paginateCancelledKitchenTicket?: Date;
  exposeDuplicateCartLineOnCheckout!: number;
  tightenRegionalBowl?: string[];
  addStaleStorePerStore!: string[];
  documentExpiredReceipt!: string[];
  relaxDuplicateCateringTrayPerStore!: string[];
  handleEmptyKitchenTicket?: string;
  documentPartialLoyaltyCredit?: string;
  trimRegionalCateringTray?: string;
  retryDuplicateModifier!: string;
  guardPartialMenuItem!: number;
  guardRegionalTaxLineOnReorder!: Date;
  backfillOversizedKitchenTicket!: Date;
  sortOversizedCateringTray!: string;
  retryPartialCateringTray!: string[];
}
