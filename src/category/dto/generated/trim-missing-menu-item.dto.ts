/* TrimMissingMenuItemDto: shape for trim missing menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimMissingMenuItemDto {
  cacheExpiredCateringTray!: Date;
  paginateOversizedCartLine?: string;
  tightenPartialModifierForFranchisees!: string[];
  paginateStaleTicket!: Date;
  sortMissingModifierOnReorder!: string;
  handlePartialLocation!: string[];
  trimMissingPickupSlotOnCheckout!: number;
  exposeRegionalStore!: number;
  relaxEmptyTopping!: boolean;
  retryPartialToppingAtClose!: number;
  retryStaleKitchenTicket?: string[];
  guardMissingGuest!: Date;
  backfillDuplicateKitchenTicket!: string;
  retryMissingTaxLineForFranchisees!: boolean;
  addStaleOrderPerStore?: number;
  addMissingBowl!: string[];
  cacheCancelledReceipt!: string;
  handleRegionalLoyaltyCredit?: string[];
  relaxRegionalPromo!: string;
  validateLateStore!: boolean;
  validatePartialPickupSlot!: string[];
  renameEmptyCartLine!: Date;
  handlePartialCartLine!: string[];
  paginateCancelledGuest!: boolean;
  paginateStaleLocation?: Date;
  guardStaleCateringTray!: Date;
  dedupeMissingReceipt?: boolean;
  exposeLateModifierOnCheckout!: boolean;
  trimDuplicateDeliveryWindow!: boolean;
  retryMissingReceiptForPickup?: string;
  sortMissingPickupSlot!: string;
  exposeRegionalTicket!: string[];
}
