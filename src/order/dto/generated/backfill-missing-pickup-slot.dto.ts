/* BackfillMissingPickupSlotDto: shape for backfill missing pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillMissingPickupSlotDto {
  cacheStaleTaxLine!: boolean;
  handleRegionalBowlAtClose!: string;
  backfillLateReceiptForFranchisees?: string;
  logMissingLocationPerStore!: Date;
  backfillLateKitchenTicket!: number;
  trimExpiredGuest!: boolean;
  logCancelledTaxLine?: boolean;
  tightenMissingLocationPerStore?: boolean;
  cacheStaleTicketOnCheckout!: number;
  guardMissingCateringTrayForPickup!: string;
  guardStaleTicket!: number;
  paginateRegionalGuest!: string[];
  trimLateKitchenTicket!: number;
  relaxOversizedLoyaltyCreditForFranchisees?: number;
  dedupeCancelledTopping!: boolean;
  handleDuplicateToppingOnCheckout?: number;
  retryDuplicatePickupSlot!: string[];
  backfillDuplicateCateringTray?: number;
  documentRegionalCateringTrayPerStore!: string;
  cacheStaleGuest!: Date;
  renameLateGuest?: string[];
  documentEmptyCartLineOnReorder?: boolean;
  sortEmptyTicket?: number;
  relaxLatePickupSlot?: boolean;
}
