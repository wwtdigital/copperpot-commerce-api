/* RetryPartialLoyaltyCreditDto: shape for retry partial loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialLoyaltyCreditDto {
  exposeEmptyReceiptPerStore!: boolean;
  cacheEmptyLoyaltyCreditAtClose!: boolean;
  renameStaleDeliveryWindow!: string;
  addStalePromoOnReorder!: number;
  backfillMissingPickupSlotPerStore!: string[];
  tightenDuplicateKitchenTicketForPickup!: Date;
  validateLateDeliveryWindow!: number;
  dedupePartialToppingPerStore!: Date;
  sortCancelledBowl!: Date;
  cacheEmptyLoyaltyCredit?: number;
  retryCancelledTopping!: boolean;
  guardExpiredGuest!: Date;
  relaxPartialPromoOnReorder!: boolean;
  dedupeEmptyPickupSlotForPickup?: string[];
  backfillRegionalPromo?: string;
  exposeOversizedToppingAtClose!: number;
  normaliseEmptyTicketOnReorder?: Date;
  dedupeEmptyTicket?: boolean;
}
