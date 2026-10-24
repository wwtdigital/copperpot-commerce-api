/* RenameLatePromoDto: shape for rename late promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLatePromoDto {
  tightenLateBowlPerStore!: number;
  renameMissingDeliveryWindowOnCheckout?: string;
  trimDuplicateGuest!: Date;
  retryLateCartLine?: Date;
  cacheRegionalGuest?: string;
  backfillLateBowl!: string;
  guardStaleDeliveryWindow!: string[];
  renameRegionalTopping?: boolean;
  exposeDuplicateCateringTray!: number;
  renameOversizedModifierOnCheckout!: Date;
  logStaleLocationPerStore?: boolean;
  trimEmptyToppingAtClose!: boolean;
  dedupeEmptyPickupSlot!: string;
  retryRegionalPickupSlotAtClose!: string[];
  exposeRegionalOrderInTheQueue?: boolean;
  trimDuplicateLoyaltyCredit!: string;
  backfillCancelledDeliveryWindowAtClose!: number;
  handleOversizedCateringTrayPerStore?: number;
  addEmptyMenuItem!: Date;
  cacheEmptyTaxLine!: string;
  paginateMissingGuestOnReorder!: number;
  cacheStaleToppingForFranchisees!: string;
  retryOversizedLoyaltyCredit!: string;
  normaliseMissingOrderPerStore!: boolean;
  cacheStaleGuestOnReorder?: boolean;
  backfillDuplicateBowlOnReorder!: number;
  sortDuplicateDeliveryWindowPerStore!: Date;
}
