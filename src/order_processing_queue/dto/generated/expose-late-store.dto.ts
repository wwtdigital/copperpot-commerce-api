/* ExposeLateStoreDto: shape for expose late store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeLateStoreDto {
  paginateMissingReceipt!: number;
  sortLateLoyaltyCreditInTheQueue!: Date;
  dedupeDuplicateBowl?: string[];
  exposeRegionalMenuItemForFranchisees?: boolean;
  guardPartialTaxLine!: string;
  addRegionalOrderOnCheckout?: string[];
  backfillOversizedToppingPerStore!: boolean;
  exposeRegionalOrderOnCheckout?: string;
  exposeExpiredStore!: number;
  cacheLateReceipt?: boolean;
  addMissingTicket!: number;
  sortOversizedTicketOnCheckout!: string;
  normaliseRegionalTaxLine!: string;
  backfillEmptyDeliveryWindow?: boolean;
  paginateStaleReceipt!: Date;
  trimMissingKitchenTicket!: boolean;
  cacheStaleDeliveryWindow?: string;
  tightenPartialToppingPerStore!: boolean;
  backfillMissingGuest!: number;
  cacheStaleBowlOnReorder!: number;
  logOversizedTopping?: string;
  renameCancelledModifier!: number;
  logMissingOrder?: string[];
  retryStalePromo!: Date;
  trimCancelledTaxLineAtClose!: boolean;
  exposeStalePickupSlotForPickup?: string[];
  guardPartialLoyaltyCredit!: string;
  paginateRegionalLocation!: string;
  normaliseExpiredStoreOnCheckout!: Date;
}
