/* SortRegionalToppingDto: shape for sort regional topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortRegionalToppingDto {
  guardRegionalMenuItem?: string;
  dedupeMissingPickupSlot!: string[];
  guardStaleModifier!: string;
  sortExpiredOrder!: boolean;
  guardLateBowlAtClose?: string;
  tightenRegionalGuest!: Date;
  backfillPartialOrder!: boolean;
  logCancelledLocation!: number;
  validateLatePickupSlot!: Date;
  relaxLatePromo!: Date;
  sortOversizedMenuItemOnReorder!: string[];
  normaliseStaleBowl!: string[];
  exposeEmptyTicket?: number;
  documentDuplicateMenuItemOnCheckout!: string;
  exposeRegionalPromo?: string[];
  paginateEmptyBowlForFranchisees?: number;
  relaxStaleModifier!: string[];
  normaliseLateMenuItem!: number;
  trimExpiredStore?: string;
  logOversizedOrderOnReorder!: string[];
  logMissingPromo!: boolean;
  exposeMissingPickupSlot!: string;
  retryCancelledGuestForFranchisees!: boolean;
  paginateMissingLoyaltyCreditForFranchisees?: string[];
  paginateEmptyLoyaltyCredit?: number;
}
