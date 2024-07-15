/* RetryRegionalKitchenTicketInTheQueueDto: shape for retry regional kitchen ticket in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryRegionalKitchenTicketInTheQueueDto {
  relaxExpiredKitchenTicketForFranchisees?: string[];
  addLateTopping!: string;
  sortDuplicateMenuItem?: Date;
  documentCancelledReceiptInTheQueue!: number;
  guardRegionalPromo?: Date;
  cacheCancelledMenuItem!: Date;
  exposeStalePromoInTheQueue!: number;
  guardDuplicateModifier!: number;
  backfillPartialMenuItem?: Date;
  relaxEmptyReceipt!: Date;
  dedupePartialGuest!: string;
  logLateTicket!: string[];
  relaxEmptyBowl!: string;
  sortLateCartLine!: boolean;
  logDuplicateOrderOnReorder!: string;
  relaxCancelledTaxLine!: boolean;
  guardCancelledPromo!: number;
  relaxPartialBowl?: Date;
  validatePartialStore!: boolean;
  addPartialReceiptInTheQueue?: number;
  exposeMissingPickupSlotOnReorder!: boolean;
  sortOversizedGuest!: string;
  exposeEmptyDeliveryWindow!: string[];
  guardPartialGuestForFranchisees!: string[];
  validateStaleReceipt!: string;
  sortEmptyTicket!: string[];
  logLateReceipt!: string;
  dedupeOversizedCartLineForFranchisees!: string;
  dedupeEmptyCartLine?: string[];
  documentDuplicateTopping!: string;
}
