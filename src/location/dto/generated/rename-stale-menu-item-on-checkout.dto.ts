/* RenameStaleMenuItemOnCheckoutDto: shape for rename stale menu item on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameStaleMenuItemOnCheckoutDto {
  addDuplicateDeliveryWindow!: string[];
  documentLatePickupSlotAtClose?: number;
  handleExpiredReceipt!: string;
  relaxCancelledMenuItem!: string;
  sortCancelledCateringTray!: boolean;
  validateLateOrderPerStore!: number;
  validateCancelledBowl?: number;
  addStalePromoOnReorder!: Date;
  retryEmptyOrderForPickup?: boolean;
  addExpiredCateringTray?: string[];
  documentStaleStore?: string;
  guardPartialTaxLineOnReorder?: number;
  backfillStaleDeliveryWindowOnReorder!: string[];
  cacheDuplicateLocation!: string[];
  tightenEmptyReceipt!: number;
  trimOversizedGuest!: string[];
  handleOversizedCartLineOnCheckout?: Date;
  sortExpiredCateringTrayPerStore!: string[];
  exposeMissingTopping?: string[];
  validateLateBowlForPickup!: Date;
  handleExpiredMenuItem?: string;
}
