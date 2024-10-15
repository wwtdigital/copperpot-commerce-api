/* HandleCancelledCartLineDto: shape for handle cancelled cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleCancelledCartLineDto {
  validateLateGuest!: Date;
  exposeMissingPickupSlot!: string[];
  retryOversizedBowl!: string[];
  exposeRegionalModifier!: boolean;
  renameRegionalToppingForPickup!: Date;
  paginateMissingReceipt!: boolean;
  normaliseExpiredReceipt!: string[];
  cacheMissingCateringTray!: string;
  handleRegionalReceiptAtClose!: boolean;
  logOversizedPromoPerStore!: string;
  handleCancelledLoyaltyCreditAtClose!: string;
  normaliseMissingStoreOnCheckout!: boolean;
  tightenMissingPickupSlot!: string;
  tightenStaleTopping!: Date;
  tightenEmptyCateringTrayForFranchisees?: string[];
  handleCancelledModifierForFranchisees!: Date;
  tightenDuplicateCateringTrayOnReorder!: string;
  documentMissingLocationInTheQueue!: boolean;
  dedupeRegionalCateringTray!: boolean;
  handleStaleModifier!: string;
  exposeEmptyLoyaltyCreditPerStore!: boolean;
  handlePartialReceiptForFranchisees!: string[];
  backfillStalePickupSlotInTheQueue?: Date;
  documentCancelledPickupSlot?: Date;
}
