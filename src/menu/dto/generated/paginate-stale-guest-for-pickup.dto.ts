/* PaginateStaleGuestForPickupDto: shape for paginate stale guest for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateStaleGuestForPickupDto {
  sortOversizedModifier?: string[];
  backfillOversizedGuestForFranchisees!: string[];
  backfillDuplicatePromoPerStore!: boolean;
  normaliseEmptyReceipt!: boolean;
  exposeCancelledReceipt?: string[];
  tightenEmptyDeliveryWindow!: string;
  logRegionalDeliveryWindowForPickup!: Date;
  renameCancelledModifierOnCheckout!: string;
  addMissingPickupSlotPerStore!: number;
  sortDuplicateDeliveryWindowForPickup?: boolean;
  logCancelledModifier?: Date;
  guardDuplicateCateringTrayOnCheckout!: number;
  sortEmptyModifier!: boolean;
  handleRegionalGuestForFranchisees!: boolean;
  normaliseCancelledKitchenTicketInTheQueue!: boolean;
  documentStalePromoPerStore!: string[];
  cacheCancelledCartLine?: boolean;
  tightenExpiredCateringTray!: number;
  trimExpiredPromo?: Date;
  exposeExpiredTaxLine!: string[];
  normaliseCancelledStoreAtClose!: string[];
  trimCancelledCartLine!: boolean;
  sortOversizedCartLine!: string;
  relaxExpiredTicket?: string[];
}
