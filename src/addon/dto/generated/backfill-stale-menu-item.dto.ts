/* BackfillStaleMenuItemDto: shape for backfill stale menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleMenuItemDto {
  trimPartialOrder!: boolean;
  relaxDuplicateCateringTrayForPickup?: string[];
  paginatePartialModifier!: number;
  normaliseExpiredReceiptPerStore?: boolean;
  handleDuplicateReceiptInTheQueue!: number;
  guardDuplicateDeliveryWindowForFranchisees!: boolean;
  renamePartialModifier!: Date;
  guardLateMenuItem!: string[];
  addOversizedModifier!: string;
  documentDuplicateModifierPerStore!: boolean;
  handleRegionalCartLine!: string;
  exposeRegionalGuest!: string;
  validateLatePromo!: boolean;
  tightenDuplicatePromoInTheQueue!: string[];
  backfillCancelledOrderOnCheckout!: Date;
  trimOversizedDeliveryWindow!: number;
  guardCancelledReceiptPerStore?: Date;
  exposeMissingTaxLine!: Date;
  exposeDuplicateBowl!: number;
  guardStaleMenuItemAtClose!: string;
  guardEmptyReceiptInTheQueue?: boolean;
  guardExpiredGuest!: string;
  guardExpiredTicket!: string;
  sortOversizedKitchenTicket!: boolean;
  exposeStaleBowlOnCheckout!: string;
  paginateEmptyReceipt?: string;
}
