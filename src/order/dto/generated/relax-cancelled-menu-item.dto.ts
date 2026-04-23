/* RelaxCancelledMenuItemDto: shape for relax cancelled menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxCancelledMenuItemDto {
  renameDuplicateBowl?: number;
  exposeCancelledMenuItem!: boolean;
  validateRegionalOrder!: Date;
  normaliseMissingModifier?: string;
  handleMissingTicket?: Date;
  cacheEmptyLocation!: string[];
  handleLateStore!: boolean;
  renamePartialPromoOnReorder!: Date;
  retryDuplicateMenuItemOnCheckout!: boolean;
  logExpiredGuestOnCheckout!: boolean;
  paginateOversizedTaxLineAtClose!: boolean;
  exposeEmptyMenuItemOnReorder!: string[];
  normaliseMissingPickupSlot!: number;
  retryDuplicateLocationPerStore!: Date;
  backfillMissingLoyaltyCredit!: boolean;
  handleMissingGuest!: number;
  validateExpiredCateringTray!: string;
  paginateRegionalModifierOnCheckout!: number;
  paginateMissingOrder!: boolean;
  validateExpiredBowl!: boolean;
  documentRegionalDeliveryWindow!: number;
  handleStaleLoyaltyCreditForFranchisees!: number;
  guardLateMenuItem!: Date;
  trimOversizedModifier!: Date;
  renameOversizedTicket!: string;
  paginatePartialOrder?: number;
  relaxEmptyPromo!: string;
}
