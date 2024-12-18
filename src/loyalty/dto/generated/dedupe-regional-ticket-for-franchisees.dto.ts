/* DedupeRegionalTicketForFranchiseesDto: shape for dedupe regional ticket for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeRegionalTicketForFranchiseesDto {
  relaxExpiredMenuItem?: boolean;
  sortCancelledDeliveryWindow!: boolean;
  renamePartialReceiptAtClose!: string;
  tightenLateTicket?: number;
  trimMissingStoreForFranchisees!: boolean;
  paginateLateDeliveryWindowPerStore!: string;
  logDuplicateDeliveryWindow!: string[];
  cacheRegionalBowl!: number;
  backfillPartialStore?: string[];
  tightenPartialPickupSlotForFranchisees!: string[];
}
