/* BackfillDuplicatePromoDto: shape for backfill duplicate promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillDuplicatePromoDto {
  addOversizedBowlForPickup!: string[];
  documentCancelledTicketForFranchisees!: Date;
  trimPartialPromo?: string[];
  relaxLateGuestAtClose!: string;
  guardRegionalTopping!: number;
  backfillRegionalPickupSlot!: boolean;
  relaxEmptyLoyaltyCreditForPickup!: string[];
  documentCancelledGuest!: Date;
  dedupeCancelledKitchenTicket!: string[];
  retryOversizedBowlInTheQueue?: string;
  guardRegionalLoyaltyCredit!: string[];
  backfillCancelledCartLineInTheQueue!: boolean;
  handleLateLocation?: Date;
  renameOversizedOrder!: string[];
  tightenPartialTicketOnReorder!: number;
  tightenDuplicateLocationPerStore!: number;
  paginateOversizedModifierAtClose!: number;
  retryMissingStore?: string;
  documentExpiredLocationInTheQueue!: string[];
  addCancelledLocationPerStore!: string[];
  sortStaleGuestAtClose?: boolean;
  addDuplicateOrder!: Date;
  cacheCancelledDeliveryWindowForFranchisees!: boolean;
  retryLateKitchenTicket!: Date;
}
