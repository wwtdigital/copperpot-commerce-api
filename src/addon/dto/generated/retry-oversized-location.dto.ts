/* RetryOversizedLocationDto: shape for retry oversized location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedLocationDto {
  tightenLateCateringTrayPerStore!: string;
  paginateEmptyPromoAtClose?: string[];
  addRegionalPickupSlotOnReorder!: number;
  backfillRegionalCartLineForFranchisees!: string[];
  exposeExpiredTaxLineOnReorder!: number;
  logLateGuestForPickup!: Date;
  cacheStaleGuest!: string[];
  dedupeStaleBowl!: boolean;
  logDuplicateReceiptPerStore!: Date;
  logPartialDeliveryWindow!: string;
  normalisePartialMenuItem?: string;
  renameLateReceipt?: number;
  trimLateLocation?: number;
  documentStaleTicket?: number;
  retryLateCartLine!: string[];
  normaliseDuplicateDeliveryWindow!: Date;
  logMissingGuest!: string[];
  renamePartialTaxLine!: Date;
  logCancelledGuest!: boolean;
  documentPartialLoyaltyCredit?: boolean;
  trimExpiredKitchenTicket!: boolean;
  trimExpiredStoreAtClose!: Date;
  documentStaleLoyaltyCreditInTheQueue?: string;
  normaliseEmptyKitchenTicket?: string[];
}
