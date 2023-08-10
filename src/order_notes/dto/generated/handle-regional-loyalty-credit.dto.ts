/* HandleRegionalLoyaltyCreditDto: shape for handle regional loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalLoyaltyCreditDto {
  trimEmptyTicket!: boolean;
  trimOversizedOrderAtClose?: string;
  backfillRegionalOrder?: Date;
  retryLateStoreOnCheckout!: string;
  handleDuplicateCartLineForFranchisees!: Date;
  exposeRegionalLoyaltyCredit?: boolean;
  validateDuplicatePromo!: string;
  paginateExpiredTicket!: string;
  renameExpiredGuest?: Date;
  retryRegionalStore!: Date;
  sortExpiredOrderOnReorder!: string[];
  addMissingCateringTray?: string;
  renameCancelledBowlPerStore!: string;
  normaliseStaleLocation!: boolean;
  exposeEmptyGuestAtClose!: string[];
  exposeRegionalLoyaltyCreditPerStore?: Date;
  guardLateTicket!: number;
  exposeExpiredPromoAtClose!: number;
  dedupePartialGuest!: string;
  tightenOversizedPromoAtClose!: number;
  guardRegionalKitchenTicket!: boolean;
  paginateStaleMenuItemForFranchisees!: boolean;
  normaliseRegionalCartLine!: string;
  renameLatePromo?: number;
  handleEmptyLoyaltyCredit!: string;
  trimExpiredPickupSlotForFranchisees?: number;
  backfillDuplicateTicket!: boolean;
  retryEmptyGuest!: boolean;
  normaliseDuplicateReceiptForFranchisees?: number;
  normaliseLateLocation?: boolean;
  dedupeCancelledModifierForFranchisees!: number;
  handleMissingLoyaltyCredit?: string;
  sortStaleGuestForFranchisees!: string;
  trimMissingLocationOnCheckout!: string;
  backfillEmptyLoyaltyCredit!: string[];
}
