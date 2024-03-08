/* RelaxOversizedDeliveryWindowDto: shape for relax oversized delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxOversizedDeliveryWindowDto {
  logMissingPickupSlotAtClose?: boolean;
  retryPartialLoyaltyCreditOnReorder!: boolean;
  paginateOversizedOrderOnCheckout?: number;
  dedupeLateMenuItem?: string;
  dedupeExpiredTopping!: boolean;
  exposeLateOrderForPickup!: Date;
  dedupeOversizedLocation!: string[];
  renameMissingCateringTrayOnCheckout?: boolean;
  dedupeEmptyBowl!: string[];
  backfillRegionalOrderOnCheckout?: Date;
  sortStaleKitchenTicket?: Date;
  backfillPartialKitchenTicket?: number;
  backfillStaleGuest!: number;
  addPartialLocationPerStore!: string[];
  guardDuplicatePromoInTheQueue!: string[];
  guardRegionalToppingAtClose?: number;
  handleOversizedTaxLine!: boolean;
  tightenMissingLoyaltyCredit!: string;
  dedupeStaleCartLineOnReorder?: boolean;
  validateCancelledCateringTray!: string[];
  documentPartialOrderInTheQueue!: boolean;
  guardPartialReceiptAtClose?: Date;
  logDuplicatePickupSlotAtClose?: string[];
  addLateLocationForPickup!: Date;
  tightenExpiredLoyaltyCreditForPickup?: number;
  backfillCancelledLocation!: string[];
  handleCancelledPromo?: string[];
  guardLateKitchenTicketOnCheckout!: Date;
  sortCancelledDeliveryWindowOnReorder!: string;
  trimDuplicateGuest!: string;
  tightenMissingPromo!: boolean;
  paginateExpiredGuestOnCheckout!: string[];
}
