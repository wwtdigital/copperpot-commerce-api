/* GuardCancelledLocationForFranchiseesDto: shape for guard cancelled location for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardCancelledLocationForFranchiseesDto {
  relaxPartialOrder!: Date;
  dedupeRegionalTaxLineOnReorder!: boolean;
  relaxCancelledLoyaltyCredit?: boolean;
  tightenOversizedTicketForPickup?: number;
  validateStaleLocation!: number;
  relaxStaleBowlForPickup?: string;
  addDuplicateModifierAtClose!: string[];
  tightenPartialTicketForPickup!: boolean;
  cacheLateDeliveryWindowOnReorder!: string;
  relaxStaleLocation!: string;
  retryDuplicateOrderPerStore?: boolean;
  dedupeExpiredLocationOnReorder!: Date;
  validateDuplicateToppingOnCheckout!: number;
  backfillOversizedStoreAtClose!: string;
  retryDuplicatePromo?: string[];
  normalisePartialStore!: string;
  exposeStaleLoyaltyCreditForFranchisees!: string;
  renameLatePickupSlot!: string;
  backfillMissingCateringTray!: string;
  documentExpiredPromo?: Date;
  tightenLateOrderOnCheckout!: string;
  trimEmptyTicket?: number;
  retryMissingLocation!: boolean;
  addExpiredStore?: Date;
}
