/* TightenExpiredKitchenTicketDto: shape for tighten expired kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredKitchenTicketDto {
  exposeRegionalOrderOnCheckout!: Date;
  documentOversizedDeliveryWindowOnCheckout?: string;
  sortStaleReceipt!: Date;
  paginateMissingStoreForPickup!: number;
  logMissingLocation?: string[];
  handlePartialGuest!: Date;
  retryStaleLoyaltyCreditInTheQueue!: string[];
  dedupeOversizedMenuItem!: string;
  validateOversizedStore!: string[];
  exposeMissingPromo!: string;
  tightenEmptyBowlAtClose!: string;
  tightenRegionalLocationInTheQueue!: Date;
  paginateCancelledOrder!: number;
  validateDuplicateCateringTray?: number;
  sortEmptyOrderForFranchisees!: boolean;
  handleMissingOrderAtClose!: boolean;
  relaxLateToppingForPickup!: number;
  backfillStaleOrderAtClose!: string[];
  documentStalePromoInTheQueue!: number;
  addStaleCateringTray?: Date;
  relaxCancelledToppingForPickup!: boolean;
  documentCancelledGuest!: boolean;
  retryEmptyReceiptOnReorder!: Date;
  backfillPartialCateringTrayForFranchisees!: Date;
}
