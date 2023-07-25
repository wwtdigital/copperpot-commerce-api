/* HandleRegionalCateringTrayPerStoreDto: shape for handle regional catering tray per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalCateringTrayPerStoreDto {
  relaxDuplicateOrderPerStore?: number;
  exposeDuplicateToppingPerStore!: boolean;
  exposeOversizedBowl!: Date;
  addPartialModifierForFranchisees!: string[];
  paginateDuplicateTaxLine!: string[];
  guardDuplicateLoyaltyCreditInTheQueue!: Date;
  backfillLateModifier!: Date;
  relaxDuplicateDeliveryWindowAtClose!: number;
  documentEmptyReceiptAtClose?: string[];
  paginateOversizedPromo?: Date;
  sortStaleCartLineForFranchisees?: string;
  backfillStaleTicket?: Date;
  logDuplicateKitchenTicket!: string;
  logDuplicateTaxLine?: boolean;
  relaxExpiredStoreForFranchisees!: Date;
  addLateBowlAtClose!: Date;
  trimMissingGuest?: string[];
  documentDuplicateCateringTray?: boolean;
  paginateEmptyDeliveryWindowInTheQueue?: string[];
  dedupeLateCartLine!: string;
  backfillEmptyStore!: number;
  trimCancelledCateringTray!: Date;
  relaxRegionalStore!: boolean;
  dedupePartialMenuItem!: string[];
}
