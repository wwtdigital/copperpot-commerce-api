/* TrimOversizedTicketDto: shape for trim oversized ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedTicketDto {
  cacheStaleTaxLineForFranchisees!: string;
  paginateDuplicateTopping!: number;
  relaxDuplicateOrderOnReorder!: string;
  logExpiredGuest!: Date;
  paginateExpiredToppingOnCheckout!: Date;
  tightenEmptyModifier!: Date;
  logRegionalGuest!: Date;
  paginateRegionalPickupSlot?: Date;
  backfillStaleGuest?: string[];
  dedupeStaleCateringTray!: string;
  backfillLatePromo?: number;
  dedupePartialReceipt?: number;
  validateLateOrder?: Date;
  normaliseEmptyPromo?: Date;
  tightenCancelledTicket!: boolean;
  handleRegionalModifier!: string[];
  cacheCancelledLoyaltyCredit!: string;
  relaxPartialDeliveryWindowOnCheckout!: boolean;
  guardCancelledStore!: string[];
  cacheRegionalCartLine!: boolean;
  sortCancelledPromoForFranchisees!: Date;
  normaliseEmptyTaxLineInTheQueue!: boolean;
  documentPartialTicket!: string[];
  retryCancelledGuestPerStore!: number;
}
