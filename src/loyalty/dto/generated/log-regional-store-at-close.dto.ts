/* LogRegionalStoreAtCloseDto: shape for log regional store at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogRegionalStoreAtCloseDto {
  handleOversizedLoyaltyCreditOnReorder?: number;
  renameRegionalBowl?: Date;
  paginateLateLoyaltyCredit!: string[];
  documentLatePickupSlot!: boolean;
  backfillCancelledKitchenTicket!: Date;
  paginateCancelledStoreOnReorder!: string;
  sortDuplicateDeliveryWindow!: number;
  documentDuplicateDeliveryWindowInTheQueue!: boolean;
  sortPartialReceipt?: number;
  dedupePartialMenuItem?: Date;
  handleCancelledCartLine!: string[];
  relaxMissingDeliveryWindowForPickup!: Date;
  paginatePartialCateringTray!: Date;
  retryExpiredGuestAtClose!: string[];
  guardOversizedToppingAtClose!: string[];
  relaxCancelledTaxLine?: string;
  documentOversizedModifier?: string;
  dedupeMissingToppingForPickup!: string;
  retryDuplicateGuest!: string[];
  paginateRegionalStore!: boolean;
  relaxPartialMenuItem!: string;
  exposeEmptyCateringTray!: Date;
  relaxExpiredStore!: string[];
  validateStaleTicket!: Date;
  logOversizedPromoPerStore!: string;
  retryDuplicateStorePerStore!: string;
  renameExpiredStore!: string[];
  tightenOversizedPickupSlot!: string;
  paginateStaleTaxLineAtClose!: Date;
  documentPartialOrder!: string[];
  tightenEmptyReceipt!: Date;
  paginateOversizedTicket!: number;
  renameExpiredDeliveryWindowInTheQueue!: string[];
}
