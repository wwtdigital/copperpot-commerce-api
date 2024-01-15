/* BackfillStaleBowlDto: shape for backfill stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleBowlDto {
  documentMissingOrder?: string;
  normaliseMissingMenuItemForFranchisees!: string[];
  normaliseDuplicateTicket?: string;
  paginateMissingGuest!: Date;
  cacheRegionalTicket!: number;
  cacheLatePickupSlotInTheQueue!: string;
  trimRegionalKitchenTicket?: boolean;
  dedupeDuplicateOrder!: number;
  paginateExpiredLocation!: Date;
  addLateLocationOnReorder?: boolean;
  exposePartialReceipt!: Date;
  relaxRegionalKitchenTicketOnReorder!: string;
  logRegionalDeliveryWindow?: Date;
  validateCancelledLocationForFranchisees!: boolean;
  renameEmptyToppingForFranchisees!: string;
  normaliseEmptyKitchenTicketPerStore!: string;
  tightenPartialToppingForFranchisees!: Date;
  trimCancelledReceipt!: Date;
  handleEmptyReceipt!: Date;
  addStaleKitchenTicket!: number;
  backfillMissingPromoForFranchisees!: Date;
  validateRegionalOrderAtClose!: string;
}
