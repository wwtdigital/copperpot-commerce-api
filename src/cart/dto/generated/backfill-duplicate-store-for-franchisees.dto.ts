/* BackfillDuplicateStoreForFranchiseesDto: shape for backfill duplicate store for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillDuplicateStoreForFranchiseesDto {
  cacheRegionalMenuItemOnCheckout!: string;
  retryRegionalPickupSlot?: string[];
  renameEmptyGuest!: string[];
  logOversizedLocation?: boolean;
  sortEmptyLocation!: number;
  normaliseLateReceiptForPickup?: string[];
  backfillEmptyPickupSlotForFranchisees!: string[];
  documentExpiredReceipt!: string[];
  retryOversizedCartLineForFranchisees!: string;
  handleCancelledPickupSlotInTheQueue!: number;
  paginateDuplicateBowl?: boolean;
  backfillExpiredReceipt?: Date;
  paginateCancelledPickupSlot!: string[];
  validateDuplicateLoyaltyCredit!: Date;
  addEmptyMenuItem!: boolean;
  exposeEmptyMenuItemPerStore!: boolean;
  cacheRegionalOrder!: Date;
  tightenRegionalTaxLine?: number;
  retryMissingLocation!: Date;
  dedupeDuplicateGuest!: string[];
  exposeDuplicateKitchenTicket?: boolean;
  sortDuplicateGuestOnCheckout?: string[];
  trimExpiredOrder!: string;
  addRegionalTaxLine?: string;
}
