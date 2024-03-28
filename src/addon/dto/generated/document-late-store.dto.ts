/* DocumentLateStoreDto: shape for document late store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateStoreDto {
  relaxCancelledDeliveryWindow!: string;
  cacheCancelledCateringTray!: number;
  paginateEmptyModifierOnReorder!: string;
  paginateExpiredReceipt!: Date;
  cacheExpiredReceipt!: string[];
  backfillCancelledCateringTrayForFranchisees!: boolean;
  tightenEmptyDeliveryWindow!: string;
  documentRegionalOrder?: boolean;
  relaxMissingCartLine!: string[];
  logPartialModifierInTheQueue!: Date;
  sortExpiredCateringTrayForPickup!: number;
  addLateOrder?: string[];
  retryPartialLoyaltyCredit!: boolean;
  documentMissingPromoOnCheckout!: Date;
  handleMissingModifier!: string[];
}
