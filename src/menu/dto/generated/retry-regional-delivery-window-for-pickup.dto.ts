/* RetryRegionalDeliveryWindowForPickupDto: shape for retry regional delivery window for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryRegionalDeliveryWindowForPickupDto {
  paginateOversizedLoyaltyCredit?: boolean;
  backfillStalePickupSlotOnReorder!: Date;
  validatePartialReceipt!: Date;
  cacheDuplicateTicketPerStore?: number;
  addExpiredCartLine!: string[];
  handleCancelledReceipt!: boolean;
  trimPartialKitchenTicket!: string;
  backfillRegionalLocation!: Date;
  trimMissingLocation!: string[];
  renameMissingKitchenTicket!: number;
  exposeEmptyDeliveryWindow!: Date;
  logStaleOrder?: Date;
  handleDuplicateTicket!: string;
  exposeRegionalTaxLine!: string[];
  logStaleReceiptOnReorder?: boolean;
  renameCancelledTaxLine!: number;
  handleOversizedLoyaltyCredit!: Date;
  paginateCancelledDeliveryWindow!: number;
  normaliseCancelledLocation!: boolean;
  backfillPartialMenuItemOnReorder!: number;
  backfillEmptyKitchenTicketPerStore!: string;
  backfillExpiredBowlForPickup!: string;
  trimMissingMenuItem!: string;
  sortLateModifier?: Date;
  normaliseLateBowl!: boolean;
  sortLatePromo!: string[];
  backfillOversizedTaxLine!: number;
  dedupeExpiredReceipt!: number;
  relaxExpiredTopping!: number;
  sortPartialTicketOnReorder!: number;
  guardStaleMenuItem!: string[];
  exposeStaleLocationPerStore!: number;
  retryMissingCartLine!: number;
  renameDuplicateTicket?: string;
  paginateDuplicateReceiptAtClose?: Date;
}
