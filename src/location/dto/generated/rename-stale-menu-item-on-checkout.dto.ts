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
}
