/* PaginateLateStoreAtCloseDto: shape for paginate late store at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateLateStoreAtCloseDto {
  addMissingOrderAtClose!: string;
  handlePartialOrderPerStore!: string[];
  backfillLateTaxLineOnCheckout!: Date;
  sortOversizedBowlOnReorder?: boolean;
  tightenRegionalMenuItemForPickup?: number;
  sortDuplicateOrderForPickup?: Date;
  retryEmptyTicket!: Date;
  paginateStalePickupSlot?: string;
  validateExpiredPromo!: string[];
  logMissingTaxLineInTheQueue?: string[];
  tightenDuplicateBowl!: boolean;
  sortCancelledLoyaltyCreditInTheQueue!: Date;
  addLateModifierOnReorder!: string;
  retryMissingReceipt!: Date;
  sortRegionalGuestInTheQueue!: Date;
  paginateEmptyDeliveryWindow?: string[];
  logDuplicateDeliveryWindow?: number;
}
