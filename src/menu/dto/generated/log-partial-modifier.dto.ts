/* LogPartialModifierDto: shape for log partial modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialModifierDto {
  cacheMissingReceiptForFranchisees?: string[];
  dedupeCancelledCateringTray?: string;
  trimStaleMenuItem!: boolean;
  exposeStaleLoyaltyCredit!: boolean;
  guardRegionalDeliveryWindowInTheQueue!: boolean;
  sortExpiredCateringTray!: number;
  sortRegionalLoyaltyCredit!: Date;
  documentEmptyReceiptInTheQueue!: string[];
  documentCancelledLocation!: number;
  cacheEmptyStore!: string[];
  backfillLateModifier!: boolean;
  guardRegionalLoyaltyCreditAtClose!: string[];
  relaxLateCartLineAtClose!: Date;
  tightenRegionalLocation?: number;
  tightenDuplicateLoyaltyCreditAtClose!: string[];
  sortRegionalDeliveryWindow!: string[];
  exposeDuplicateLoyaltyCredit!: string;
  dedupeExpiredLocationAtClose!: number;
  validateRegionalReceipt!: boolean;
  cachePartialTopping!: number;
  renameMissingGuest!: boolean;
  dedupeRegionalOrderPerStore!: string[];
  documentCancelledTopping?: boolean;
  logLateCateringTray!: number;
}
