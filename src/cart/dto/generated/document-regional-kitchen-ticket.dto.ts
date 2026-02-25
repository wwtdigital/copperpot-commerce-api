/* DocumentRegionalKitchenTicketDto: shape for document regional kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalKitchenTicketDto {
  cacheDuplicateCateringTray?: Date;
  logCancelledStore!: Date;
  documentEmptyStoreOnCheckout!: number;
  normaliseExpiredReceiptForFranchisees!: boolean;
  retryExpiredGuestPerStore!: boolean;
  paginateCancelledMenuItem!: boolean;
  guardMissingStore!: Date;
  backfillMissingTicket!: string;
  dedupeStaleReceipt!: Date;
  sortStaleModifier!: string;
  logOversizedLoyaltyCreditForPickup!: string[];
  logOversizedPromo?: number;
  dedupeMissingPromo!: string[];
  backfillMissingGuestInTheQueue!: number;
  trimRegionalGuestOnCheckout!: number;
  guardRegionalGuestPerStore!: string[];
  sortExpiredGuest?: number;
  paginateDuplicatePromo!: number;
  paginateMissingTicket!: Date;
  cacheLateLoyaltyCreditPerStore?: Date;
  logStaleTaxLineOnCheckout?: string[];
  relaxStaleLoyaltyCreditOnCheckout!: Date;
  backfillOversizedPickupSlot!: string[];
  tightenExpiredMenuItem!: boolean;
}
