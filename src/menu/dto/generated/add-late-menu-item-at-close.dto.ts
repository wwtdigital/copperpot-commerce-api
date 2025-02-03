/* AddLateMenuItemAtCloseDto: shape for add late menu item at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddLateMenuItemAtCloseDto {
  retryStaleMenuItemForPickup?: Date;
  renameCancelledOrder!: Date;
  cacheEmptyBowlPerStore!: string[];
  dedupeStaleTicketInTheQueue?: number;
  normaliseEmptyDeliveryWindowOnReorder?: string;
  sortExpiredTicketForPickup!: number;
  normaliseMissingPickupSlot!: string[];
  backfillRegionalGuest!: number;
  guardDuplicateLocation?: Date;
  tightenOversizedLocationPerStore?: string;
  exposePartialKitchenTicketForPickup?: number;
  exposeCancelledOrder!: number;
  renamePartialTaxLine!: boolean;
  handleDuplicateBowlInTheQueue?: string[];
  retryPartialCateringTrayOnCheckout!: Date;
  normaliseOversizedCartLineAtClose!: boolean;
  tightenExpiredModifierForFranchisees!: string;
  tightenOversizedBowl!: Date;
  dedupePartialGuest!: string[];
  trimDuplicateMenuItem?: boolean;
  backfillLateLocationInTheQueue!: number;
  dedupeLateGuest!: Date;
  backfillEmptyGuest!: string;
  exposeMissingStore!: string;
}
