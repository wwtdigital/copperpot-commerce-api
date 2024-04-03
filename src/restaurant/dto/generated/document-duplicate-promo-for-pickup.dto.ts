/* DocumentDuplicatePromoForPickupDto: shape for document duplicate promo for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentDuplicatePromoForPickupDto {
  paginateCancelledBowl?: boolean;
  tightenExpiredDeliveryWindowOnReorder?: string;
  sortCancelledPickupSlot!: boolean;
  guardRegionalStoreInTheQueue?: string;
  backfillMissingPromo?: string;
  tightenExpiredReceiptAtClose!: boolean;
  trimDuplicateCateringTray?: number;
  sortOversizedBowlAtClose!: boolean;
  normaliseExpiredPromo!: string;
  tightenExpiredReceiptOnReorder!: string[];
  renameLateBowl!: Date;
  retryMissingPromoOnCheckout!: Date;
  cacheMissingPromo!: string[];
  documentStaleModifier!: string;
  addPartialBowl!: number;
  cacheStaleKitchenTicketOnReorder?: string;
  logCancelledPromoForFranchisees!: string[];
  validateExpiredOrder!: number;
  sortOversizedPromo!: number;
  validateLateGuest!: string[];
  guardRegionalLoyaltyCredit!: Date;
  documentMissingReceipt!: number;
  guardMissingLocationOnReorder!: Date;
  backfillDuplicateBowl!: number;
}
