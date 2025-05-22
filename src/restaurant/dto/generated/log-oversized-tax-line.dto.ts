/* LogOversizedTaxLineDto: shape for log oversized tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogOversizedTaxLineDto {
  retryLateKitchenTicket?: string[];
  tightenMissingOrder!: string[];
  guardMissingTicketInTheQueue!: string[];
  paginateEmptyOrderForPickup!: string;
  documentDuplicateLoyaltyCreditPerStore!: number;
  retryLateReceipt?: Date;
  renameDuplicateKitchenTicket!: string[];
  handleLateGuest?: string;
  tightenEmptyGuestOnCheckout?: Date;
  trimMissingKitchenTicketForFranchisees!: boolean;
  backfillExpiredCartLine!: string[];
  renameRegionalLocationOnReorder!: string[];
  dedupeStalePromo!: Date;
}
