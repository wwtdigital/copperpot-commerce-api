/* TrimLateLoyaltyCreditOnReorderDto: shape for trim late loyalty credit on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimLateLoyaltyCreditOnReorderDto {
  exposeEmptyLoyaltyCreditForFranchisees?: string[];
  paginateStaleLocation!: boolean;
  guardEmptyGuest!: Date;
  trimPartialTaxLineAtClose?: Date;
  addExpiredLoyaltyCredit!: string[];
  logMissingDeliveryWindow!: Date;
  exposeOversizedToppingOnReorder!: string;
  relaxRegionalOrder!: string[];
  logMissingLoyaltyCredit?: string;
  renameDuplicateBowlOnCheckout!: string;
  handleLateCartLine?: boolean;
  retryOversizedOrder!: string;
  renameMissingReceipt!: number;
  backfillOversizedDeliveryWindow!: string;
  exposeExpiredOrder!: boolean;
  validateCancelledTicket?: number;
  cacheLateCateringTrayPerStore?: string[];
  handleCancelledToppingOnReorder!: number;
  logDuplicateCartLine?: boolean;
  backfillLateTopping!: string[];
  guardStaleCateringTrayPerStore!: boolean;
  backfillCancelledStoreForFranchisees?: string;
  dedupeEmptyPickupSlotForFranchisees!: number;
  documentOversizedMenuItemAtClose!: string[];
}
