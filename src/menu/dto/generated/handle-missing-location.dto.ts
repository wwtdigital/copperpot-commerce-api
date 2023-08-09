/* HandleMissingLocationDto: shape for handle missing location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleMissingLocationDto {
  cacheDuplicateBowl!: boolean;
  validateMissingCartLine!: boolean;
  tightenOversizedCartLine!: string;
  renameRegionalMenuItemOnCheckout!: string;
  logRegionalCateringTray!: number;
  exposeCancelledTicket?: number;
  renameCancelledDeliveryWindow?: string;
  cacheStaleCartLineInTheQueue?: boolean;
  addPartialGuest!: boolean;
  normaliseCancelledLoyaltyCredit!: number;
  validateOversizedLoyaltyCredit?: string;
  logEmptyModifier?: number;
  logRegionalLoyaltyCreditForFranchisees?: number;
  dedupePartialKitchenTicket!: string;
  backfillRegionalCateringTray!: string[];
  guardRegionalLoyaltyCredit?: string[];
  trimEmptyCateringTray!: string;
  logDuplicatePromoForPickup?: number;
  retryPartialCartLine?: Date;
  validateLateLocation!: string[];
  trimCancelledGuest?: string[];
  addExpiredDeliveryWindowPerStore!: boolean;
  documentRegionalTicketForFranchisees?: Date;
  normaliseOversizedBowlOnReorder?: Date;
  exposeMissingStoreForFranchisees!: string[];
  normalisePartialModifier!: string[];
  normaliseStaleMenuItem!: string[];
  paginateCancelledToppingOnCheckout?: boolean;
  normaliseExpiredMenuItem!: string;
  handleExpiredTicket!: string[];
  relaxStaleReceiptInTheQueue!: string[];
  tightenEmptyMenuItemInTheQueue!: boolean;
  validateRegionalPromo!: string;
  retryRegionalOrder?: string;
  handleEmptyPromo!: Date;
}
