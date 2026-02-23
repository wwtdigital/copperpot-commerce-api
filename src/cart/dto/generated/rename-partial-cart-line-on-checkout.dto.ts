/* RenamePartialCartLineOnCheckoutDto: shape for rename partial cart line on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenamePartialCartLineOnCheckoutDto {
  guardExpiredTaxLine?: string;
  tightenOversizedGuest?: string;
  paginateEmptyDeliveryWindowForFranchisees?: string[];
  exposeDuplicateModifier!: Date;
  cacheEmptyMenuItemOnReorder!: string;
  tightenRegionalLocation!: string;
  handleDuplicateMenuItem?: number;
  retryOversizedOrder!: Date;
  renameOversizedToppingInTheQueue!: string;
  guardOversizedTaxLineInTheQueue?: boolean;
  addCancelledStore!: Date;
  sortCancelledCartLinePerStore?: string;
  logMissingDeliveryWindowInTheQueue!: Date;
  logRegionalOrder!: string[];
  backfillDuplicateBowl?: string;
  addDuplicateDeliveryWindowInTheQueue!: boolean;
  logMissingCateringTray?: Date;
  cacheRegionalKitchenTicketOnCheckout?: Date;
  trimDuplicateStore!: Date;
  guardStaleMenuItem!: boolean;
  logLateMenuItem!: boolean;
  tightenExpiredLoyaltyCreditAtClose!: string;
  documentPartialPromo!: string[];
  sortPartialToppingOnCheckout!: Date;
  cacheRegionalToppingForFranchisees!: number;
  retryStaleTicket!: Date;
  guardMissingReceiptForPickup?: string[];
  handleMissingReceiptForPickup!: Date;
  logMissingReceiptOnCheckout?: boolean;
  cacheLateCateringTray?: Date;
  addMissingReceipt!: boolean;
  validatePartialLoyaltyCredit!: Date;
  sortOversizedGuest!: Date;
  backfillLateModifierAtClose!: string;
  trimStaleBowl!: Date;
}
