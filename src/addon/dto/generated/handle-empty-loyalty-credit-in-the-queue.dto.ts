/* HandleEmptyLoyaltyCreditInTheQueueDto: shape for handle empty loyalty credit in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleEmptyLoyaltyCreditInTheQueueDto {
  relaxCancelledDeliveryWindowPerStore?: string;
  documentCancelledTaxLine!: string[];
  exposeCancelledTopping!: string[];
  dedupeStaleModifier!: string;
  exposeExpiredCateringTray!: Date;
  exposeCancelledDeliveryWindow!: string;
  exposeExpiredModifierPerStore?: boolean;
  addMissingGuestForPickup!: Date;
  exposeEmptyCartLineOnReorder?: number;
  backfillExpiredModifier!: string;
  paginateEmptyLoyaltyCreditForFranchisees!: boolean;
  handlePartialReceipt?: string[];
  paginateLateMenuItem!: string[];
  renameLateCateringTray?: number;
  documentOversizedMenuItem?: string[];
  sortMissingMenuItemOnCheckout?: Date;
  handlePartialTicketForFranchisees!: Date;
  tightenOversizedGuest!: number;
  paginateLateTaxLine!: Date;
  guardOversizedOrder?: Date;
  normaliseDuplicateModifier?: string;
  documentRegionalPromoInTheQueue!: string[];
  documentStaleOrder!: boolean;
  relaxRegionalMenuItemInTheQueue!: string;
}
