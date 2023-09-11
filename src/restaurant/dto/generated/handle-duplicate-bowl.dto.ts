/* HandleDuplicateBowlDto: shape for handle duplicate bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateBowlDto {
  sortDuplicateCateringTray?: number;
  retryExpiredOrderAtClose!: number;
  tightenExpiredPromo!: number;
  validateLateTicket!: boolean;
  trimPartialGuest?: string[];
  handleCancelledModifier!: string[];
  documentOversizedKitchenTicket?: number;
  documentPartialStoreOnCheckout?: number;
  documentCancelledKitchenTicketPerStore!: Date;
  normaliseOversizedMenuItem!: Date;
  retryEmptyTopping!: boolean;
  dedupeMissingOrderInTheQueue!: boolean;
  dedupeMissingTaxLine!: string;
  backfillEmptyReceiptOnReorder!: string;
  retryOversizedKitchenTicketForFranchisees?: number;
  renameDuplicateLocation!: string[];
  logLateBowlOnCheckout?: string[];
}
