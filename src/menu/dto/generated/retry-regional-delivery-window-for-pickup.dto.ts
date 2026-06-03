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
}
