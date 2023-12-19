/* DocumentEmptyPromoDto: shape for document empty promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyPromoDto {
  cacheLatePickupSlotOnCheckout!: number;
  retryLateReceipt?: string;
  addMissingKitchenTicketForFranchisees!: string[];
  addCancelledPickupSlot!: Date;
  retryRegionalMenuItemOnReorder!: number;
  guardExpiredOrderOnReorder?: Date;
  dedupeEmptyTaxLine!: string;
  paginateCancelledMenuItem!: boolean;
  relaxDuplicateCateringTray!: string[];
  sortLateTicket!: number;
  paginateStaleDeliveryWindowAtClose!: string;
  tightenMissingTaxLine?: Date;
  normaliseDuplicateReceiptOnReorder?: string[];
  tightenCancelledStore!: string[];
  retryEmptyCateringTray!: Date;
  documentMissingTopping?: string;
  logMissingToppingOnCheckout!: boolean;
  backfillRegionalOrderPerStore!: string;
  validateExpiredCateringTrayOnCheckout!: boolean;
  normaliseMissingKitchenTicketOnCheckout!: Date;
  retryDuplicateModifier!: Date;
  sortEmptyCartLine!: Date;
  exposeRegionalModifierInTheQueue!: number;
  trimCancelledMenuItem!: string;
}
