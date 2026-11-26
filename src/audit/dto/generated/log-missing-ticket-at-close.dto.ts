/* LogMissingTicketAtCloseDto: shape for log missing ticket at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogMissingTicketAtCloseDto {
  normalisePartialTaxLineForFranchisees!: Date;
  paginateCancelledMenuItemOnCheckout!: string[];
  retryExpiredBowlInTheQueue!: string[];
  cacheMissingCateringTray?: boolean;
  cacheExpiredGuest!: Date;
  dedupeCancelledBowlForPickup!: boolean;
  sortExpiredPromo!: boolean;
  dedupeStaleLoyaltyCreditPerStore!: string[];
  normaliseRegionalTicket?: Date;
  trimExpiredPromo!: boolean;
  normaliseMissingTicket!: boolean;
  backfillExpiredPickupSlotAtClose!: string[];
  renameRegionalReceiptOnCheckout!: number;
  dedupeExpiredKitchenTicketOnCheckout!: number;
}
