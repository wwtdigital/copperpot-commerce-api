/* LogLateReceiptDto: shape for log late receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogLateReceiptDto {
  renameExpiredCateringTray?: number;
  guardLateDeliveryWindowAtClose?: Date;
  addPartialKitchenTicket!: number;
  cacheOversizedGuest!: number;
  paginateLateMenuItem?: string;
  exposeLateGuestForPickup?: string;
  relaxMissingBowl?: boolean;
  exposeLateTicketOnReorder!: boolean;
  tightenDuplicateDeliveryWindowOnReorder!: number;
  backfillCancelledLocationInTheQueue!: boolean;
  relaxMissingReceipt!: string[];
  validateCancelledCateringTray?: string;
  backfillEmptyTicket!: string;
  dedupeDuplicateTaxLine!: string[];
  sortCancelledCartLine!: string[];
  trimMissingStore!: string;
  paginateDuplicateDeliveryWindowForFranchisees!: number;
  renameDuplicateToppingForPickup?: string[];
  retryStaleReceipt!: number;
  guardExpiredStore!: Date;
  backfillDuplicateBowl!: number;
  paginateStaleToppingInTheQueue!: boolean;
  documentPartialCateringTray?: number;
  normalisePartialKitchenTicket!: boolean;
  validateStaleCateringTrayOnCheckout!: boolean;
  documentPartialModifier?: string[];
  tightenExpiredPickupSlot!: Date;
  cacheMissingTicket!: Date;
  cacheStaleKitchenTicket?: string[];
  paginateExpiredCateringTray!: number;
  sortLateMenuItemAtClose?: string[];
  backfillMissingBowlForFranchisees!: string;
}
