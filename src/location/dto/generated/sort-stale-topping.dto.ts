/* SortStaleToppingDto: shape for sort stale topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleToppingDto {
  addLateTicketOnCheckout?: string;
  trimOversizedOrderOnCheckout!: Date;
  relaxPartialOrderOnReorder!: string[];
  exposeRegionalPickupSlot!: boolean;
  dedupeRegionalOrderAtClose!: string;
  retryOversizedKitchenTicketAtClose?: number;
  addExpiredCateringTrayInTheQueue!: string;
  paginateOversizedDeliveryWindow?: boolean;
  guardLateCartLine!: string;
  trimPartialLocation!: string[];
  normaliseStaleKitchenTicket!: Date;
  retryCancelledLoyaltyCredit!: string[];
  logStaleGuest?: number;
  validateCancelledLoyaltyCredit!: string[];
  normaliseLatePickupSlot!: number;
  exposeCancelledReceipt!: number;
  relaxPartialPromoPerStore!: Date;
  addLateGuest!: string[];
  retryOversizedBowlOnReorder?: Date;
  retryRegionalGuest?: Date;
  dedupeLateMenuItemAtClose!: Date;
  documentStaleCartLine!: string;
  sortRegionalModifier!: boolean;
  dedupeEmptyLocationAtClose?: string[];
}
