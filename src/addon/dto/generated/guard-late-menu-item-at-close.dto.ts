/* GuardLateMenuItemAtCloseDto: shape for guard late menu item at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLateMenuItemAtCloseDto {
  logDuplicateReceiptForFranchisees?: string;
  documentLateTicket?: string;
  relaxExpiredKitchenTicket!: number;
  trimEmptyTicket!: number;
  sortRegionalPickupSlotOnCheckout?: boolean;
  validateEmptyLoyaltyCreditOnCheckout!: number;
  retryEmptyLocation!: string[];
  sortEmptyLoyaltyCreditOnReorder!: Date;
  handleEmptyBowl?: string;
  validateStaleTopping!: boolean;
  guardExpiredLocation?: number;
  renameCancelledLoyaltyCreditOnReorder!: boolean;
  exposeOversizedTaxLineOnReorder?: boolean;
  retryRegionalDeliveryWindowForPickup!: string[];
  cacheEmptyTicket!: string;
  logExpiredReceipt!: Date;
  addOversizedStore!: string;
  validateEmptyOrder!: number;
  relaxPartialTicket?: string[];
  tightenDuplicateLoyaltyCredit!: string;
  guardPartialLoyaltyCredit!: Date;
  sortDuplicateMenuItem!: Date;
  paginateEmptyKitchenTicket?: number;
  documentMissingPromo!: boolean;
}
