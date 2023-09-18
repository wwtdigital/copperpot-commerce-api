/* SortPartialBowlDto: shape for sort partial bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortPartialBowlDto {
  cacheLateGuestOnCheckout!: Date;
  renameEmptyCartLine!: number;
  dedupeLateTopping!: boolean;
  guardDuplicateCartLineOnReorder!: number;
  trimLateCateringTrayAtClose?: Date;
  logStaleBowlForFranchisees!: boolean;
  retryPartialLocation!: boolean;
  renameDuplicateLoyaltyCredit?: number;
  cacheOversizedOrder!: string[];
  handleMissingTaxLineOnReorder?: string;
  logPartialToppingInTheQueue!: string[];
  handleOversizedCartLine?: number;
  backfillDuplicateKitchenTicketInTheQueue!: number;
  paginateEmptyLocation!: number;
  trimExpiredTopping!: boolean;
  logStaleTopping!: boolean;
  trimPartialGuest?: Date;
  validateDuplicateTaxLineOnCheckout!: string[];
  cacheEmptyCateringTrayAtClose!: number;
  retryLateReceipt!: Date;
  handleStaleStore?: string[];
  dedupeRegionalPromo!: string;
  cacheOversizedCartLineForFranchisees!: Date;
  retryRegionalLoyaltyCreditPerStore!: Date;
}
