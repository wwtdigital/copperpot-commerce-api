/* TightenExpiredOrderAtCloseDto: shape for tighten expired order at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredOrderAtCloseDto {
  cacheOversizedMenuItem!: boolean;
  handleLateReceiptPerStore!: string;
  addMissingGuest?: string;
  handleExpiredKitchenTicketForPickup!: Date;
  guardCancelledCartLine!: Date;
  handleDuplicateTaxLine!: string;
  addDuplicateKitchenTicket?: string;
  addStaleGuest!: string;
  retryDuplicatePromoForFranchisees!: boolean;
  exposeDuplicateTicket?: Date;
  tightenOversizedReceipt!: Date;
  documentLateTaxLine?: Date;
}
