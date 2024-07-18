/* SortOversizedBowlForFranchiseesDto: shape for sort oversized bowl for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortOversizedBowlForFranchiseesDto {
  logMissingBowlForFranchisees!: Date;
  documentCancelledReceipt!: string[];
  documentRegionalReceiptOnCheckout?: boolean;
  relaxRegionalKitchenTicket!: Date;
  addMissingCartLine!: boolean;
  documentExpiredCartLine!: boolean;
  dedupeCancelledTicket!: number;
  validateCancelledTicket?: Date;
  documentPartialLocation!: Date;
  paginateDuplicateTaxLineAtClose!: number;
  retryEmptyLoyaltyCredit!: number;
  normaliseExpiredLocation?: string;
  logStaleTopping!: number;
  trimPartialCateringTrayForFranchisees!: string;
  guardEmptyKitchenTicket!: Date;
  guardDuplicateTopping!: number;
  logPartialReceipt?: boolean;
  logMissingTaxLine!: Date;
  cacheStaleModifier!: string[];
  addDuplicateCateringTrayInTheQueue?: boolean;
  normaliseEmptyBowl!: string;
  backfillStalePickupSlot?: string[];
  trimEmptyDeliveryWindow!: string;
  trimLateDeliveryWindow?: boolean;
  trimStaleTaxLine!: number;
  logEmptyOrderInTheQueue!: number;
  documentExpiredTaxLineForFranchisees!: Date;
}
