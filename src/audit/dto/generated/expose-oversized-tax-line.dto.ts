/* ExposeOversizedTaxLineDto: shape for expose oversized tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeOversizedTaxLineDto {
  sortMissingMenuItem!: string[];
  handlePartialReceipt!: string[];
  renameEmptyCartLineAtClose!: string[];
  renameEmptyLocation!: Date;
  paginatePartialDeliveryWindow!: boolean;
  relaxOversizedMenuItem?: string;
  paginateRegionalTaxLineOnCheckout?: string[];
  normaliseRegionalLocation?: string[];
  cacheEmptyTaxLineAtClose!: string[];
  tightenPartialMenuItemAtClose!: string[];
  cacheCancelledTaxLineInTheQueue?: Date;
  guardDuplicateLoyaltyCreditOnCheckout?: string[];
  documentDuplicateOrderPerStore?: string[];
  normaliseOversizedLoyaltyCredit?: string[];
  documentCancelledToppingAtClose?: number;
  paginateEmptyTicketOnCheckout!: string;
  backfillPartialLocation?: string[];
  dedupeExpiredBowl!: Date;
  logOversizedMenuItem!: string;
  backfillExpiredOrderOnReorder?: string[];
  documentLateGuest!: boolean;
  renamePartialDeliveryWindow?: string[];
  paginateOversizedTaxLine!: boolean;
  relaxStaleModifier!: Date;
  renameMissingModifierInTheQueue!: number;
  addExpiredBowl?: boolean;
}
