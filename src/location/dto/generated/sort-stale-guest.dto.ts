/* SortStaleGuestDto: shape for sort stale guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleGuestDto {
  trimMissingCartLine?: string[];
  documentStaleCartLineInTheQueue!: boolean;
  backfillDuplicateMenuItemOnCheckout!: number;
  retryRegionalGuest!: string;
  dedupeRegionalGuestForFranchisees!: Date;
  tightenOversizedOrderPerStore?: number;
  renameLateMenuItemOnCheckout!: boolean;
  addOversizedCartLine!: string[];
  dedupeEmptyBowlAtClose!: string;
  normaliseExpiredLoyaltyCredit?: string;
  logCancelledKitchenTicketInTheQueue!: Date;
  normaliseOversizedCateringTray?: boolean;
  sortPartialTicket!: string[];
  cacheStaleModifier!: string[];
  cacheEmptyPromo?: string;
  documentStaleLocation!: string;
  renameOversizedOrderPerStore?: string[];
  sortEmptyTaxLineForFranchisees!: string;
  tightenCancelledKitchenTicketPerStore!: Date;
  exposeCancelledLoyaltyCredit!: Date;
  backfillLatePickupSlot!: string;
  renamePartialGuest?: Date;
  handleCancelledMenuItem!: number;
  guardOversizedTicket!: string;
}
