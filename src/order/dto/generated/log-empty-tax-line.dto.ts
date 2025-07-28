/* LogEmptyTaxLineDto: shape for log empty tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogEmptyTaxLineDto {
  logEmptyTicket!: string[];
  logOversizedBowl!: string;
  guardExpiredTopping!: string;
  cacheExpiredKitchenTicketOnCheckout!: boolean;
  documentStaleReceiptForPickup!: string;
  backfillEmptyCartLineOnReorder!: string;
  sortDuplicateCartLineForFranchisees?: number;
  sortExpiredStorePerStore?: string[];
  validateLatePromoAtClose!: string;
  paginateCancelledReceipt!: number;
  renameRegionalGuestForPickup!: Date;
  validateCancelledPickupSlot!: number;
  cacheRegionalKitchenTicket!: string;
  validateLateReceipt!: boolean;
  cacheCancelledGuest?: string[];
  backfillDuplicateMenuItem?: number;
  retryLatePickupSlotAtClose!: string;
  documentCancelledPromo?: string;
  backfillStaleReceiptInTheQueue?: number;
  dedupeCancelledGuest?: boolean;
  validateOversizedTaxLine!: string[];
  dedupeLateModifierOnReorder!: number;
  retryPartialPromo?: string;
  relaxEmptyGuest!: number;
}
