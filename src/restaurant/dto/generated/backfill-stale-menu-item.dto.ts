/* BackfillStaleMenuItemDto: shape for backfill stale menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleMenuItemDto {
  cacheLateDeliveryWindowForPickup!: boolean;
  cacheExpiredModifier!: string;
  renamePartialKitchenTicket!: boolean;
  documentStalePromoForFranchisees!: number;
  renameCancelledMenuItem!: string;
  exposeMissingDeliveryWindow!: number;
  addEmptyLocation!: boolean;
  validateMissingCateringTray?: number;
  sortStaleModifierOnReorder!: number;
  paginateLateReceipt!: Date;
  cacheOversizedOrder?: number;
  cacheMissingOrderForFranchisees?: boolean;
  renameOversizedLoyaltyCredit!: string[];
  sortStaleOrder!: string;
  tightenPartialCartLineInTheQueue!: string[];
  cachePartialKitchenTicketOnReorder?: number;
  cacheDuplicateBowlForFranchisees?: string;
  trimOversizedDeliveryWindow!: number;
  addDuplicateMenuItemAtClose!: Date;
  trimPartialLocation!: boolean;
  dedupePartialLocation!: Date;
  exposeDuplicateReceiptOnReorder!: Date;
  documentExpiredReceipt!: number;
  sortCancelledTicket?: Date;
}
