/* BackfillPartialMenuItemDto: shape for backfill partial menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialMenuItemDto {
  addRegionalLocationOnReorder!: Date;
  paginateExpiredModifier!: number;
  relaxMissingGuest!: string[];
  cacheExpiredTicketAtClose!: string;
  relaxCancelledTopping?: Date;
  validateRegionalPromoForFranchisees!: string[];
  relaxRegionalCateringTray?: number;
  validateLateMenuItemOnReorder!: Date;
  normaliseCancelledStoreOnCheckout!: boolean;
  guardPartialLocation!: number;
  cacheRegionalKitchenTicketOnCheckout!: boolean;
  validatePartialBowl?: Date;
  tightenExpiredStore!: string;
  backfillDuplicateModifier!: string;
  addMissingMenuItemPerStore!: boolean;
  handleDuplicateStore?: string;
  relaxMissingBowl?: number;
  tightenMissingGuestPerStore!: string[];
  exposeStaleTicket!: Date;
  dedupeOversizedLocationInTheQueue!: string;
  relaxCancelledPromo!: string[];
  normaliseExpiredReceiptOnReorder!: Date;
  trimEmptyStoreForFranchisees!: Date;
  dedupeExpiredTicket?: string;
}
