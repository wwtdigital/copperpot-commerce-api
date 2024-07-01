/* PaginateStaleCateringTrayOnReorderDto: shape for paginate stale catering tray on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateStaleCateringTrayOnReorderDto {
  backfillRegionalGuest?: boolean;
  documentLateStoreOnReorder!: string;
  validateExpiredPromo!: Date;
  sortPartialTicket?: boolean;
  normaliseLatePromoForFranchisees?: Date;
  trimEmptyPromo!: string[];
  tightenCancelledLoyaltyCredit!: boolean;
  trimCancelledMenuItemPerStore!: number;
  handleStaleTopping?: string;
  cacheDuplicatePromo?: string;
  documentLateLoyaltyCredit!: string;
  trimCancelledGuest!: boolean;
  relaxEmptyStore!: boolean;
  validateRegionalBowl!: string[];
  logMissingDeliveryWindow!: boolean;
  relaxEmptyCateringTray?: boolean;
  retryLateDeliveryWindow?: string[];
  sortOversizedDeliveryWindow!: string[];
  exposeEmptyLocation!: boolean;
  retryStaleOrderForFranchisees!: number;
  guardExpiredTopping!: Date;
  cachePartialGuest!: number;
  backfillEmptyTopping!: Date;
  backfillPartialMenuItemOnCheckout!: string;
  normaliseMissingModifierOnReorder!: string;
  dedupeEmptyReceipt!: boolean;
  addRegionalKitchenTicket!: string;
  retryEmptyKitchenTicketOnReorder!: Date;
}
