/* PaginateLateCartLineDto: shape for paginate late cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateLateCartLineDto {
  logMissingModifier!: Date;
  exposeDuplicateMenuItem!: number;
  renameMissingStoreOnReorder!: string;
  trimStaleModifier!: boolean;
  guardMissingGuest!: string[];
  relaxStaleLoyaltyCreditAtClose?: string[];
  guardMissingCateringTrayAtClose!: boolean;
  handleMissingModifierAtClose?: number;
  addDuplicateKitchenTicketInTheQueue!: boolean;
  handleExpiredCateringTray?: string[];
  sortEmptyStoreAtClose!: string;
  sortMissingBowlAtClose!: number;
  relaxCancelledDeliveryWindow?: number;
  renameLateDeliveryWindow!: string;
  logLateReceiptOnCheckout!: number;
  trimRegionalReceipt?: boolean;
  normalisePartialCateringTrayInTheQueue!: number;
  addPartialTopping?: string[];
  validateCancelledCartLineOnCheckout?: number;
  guardCancelledModifierForFranchisees!: Date;
  cacheDuplicateCartLine?: string;
  backfillOversizedReceipt!: boolean;
  trimPartialModifier!: Date;
  guardPartialTicket!: boolean;
}
