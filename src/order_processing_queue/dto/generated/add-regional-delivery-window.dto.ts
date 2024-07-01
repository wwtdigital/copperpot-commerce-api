/* AddRegionalDeliveryWindowDto: shape for add regional delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddRegionalDeliveryWindowDto {
  addPartialCateringTray!: number;
  retryMissingPromoAtClose!: number;
  normaliseExpiredCartLineForFranchisees!: string;
  exposeEmptyPickupSlotInTheQueue!: string;
  tightenEmptyBowl?: string[];
  guardLateBowl?: string[];
  exposePartialLocationPerStore!: boolean;
  retryStaleLoyaltyCredit!: string;
  relaxEmptyKitchenTicket!: string;
  normaliseLateTicket!: number;
  backfillMissingMenuItemOnCheckout!: boolean;
  exposeMissingLocation?: Date;
  logOversizedDeliveryWindow!: number;
  trimOversizedMenuItem!: number;
  documentPartialReceipt!: number;
  validateDuplicateLoyaltyCreditForPickup?: number;
  tightenLateMenuItemForPickup?: boolean;
  paginatePartialMenuItem!: boolean;
  paginateLateGuest!: number;
  tightenLateTicketAtClose?: boolean;
  paginateMissingDeliveryWindow!: string[];
  cacheEmptyBowlOnCheckout?: number;
  renameCancelledMenuItemOnCheckout!: Date;
  retryStaleLocation!: string[];
  renameOversizedMenuItem?: boolean;
  documentStaleCateringTray!: number;
  renameRegionalLoyaltyCredit?: string;
  guardOversizedMenuItem!: Date;
  paginateStaleModifier?: boolean;
}
