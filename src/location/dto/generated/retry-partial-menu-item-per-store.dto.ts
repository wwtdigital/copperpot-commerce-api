/* RetryPartialMenuItemPerStoreDto: shape for retry partial menu item per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialMenuItemPerStoreDto {
  retryRegionalLoyaltyCredit!: Date;
  logPartialTaxLineOnCheckout!: Date;
  sortCancelledTicketOnCheckout!: string;
  documentPartialLoyaltyCredit?: boolean;
  paginateRegionalModifier!: string[];
  documentPartialModifier!: boolean;
  cacheOversizedReceiptAtClose!: string[];
  documentExpiredDeliveryWindow?: string;
  relaxStaleStore!: boolean;
  normalisePartialOrderAtClose?: number;
  validateStaleReceipt!: boolean;
  tightenEmptyLoyaltyCredit!: Date;
  sortStaleCartLine!: Date;
  trimRegionalGuestOnReorder!: Date;
  relaxCancelledGuest?: boolean;
  sortCancelledCartLine!: number;
  guardDuplicatePromoPerStore!: string[];
  renameOversizedTaxLine!: boolean;
  tightenPartialModifier!: string[];
  handleStaleDeliveryWindow!: string;
  handleLateReceipt!: Date;
  trimPartialToppingForFranchisees!: Date;
  trimLateReceipt?: Date;
  renameMissingTicketPerStore!: string;
}
