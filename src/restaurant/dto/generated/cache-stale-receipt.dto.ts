/* CacheStaleReceiptDto: shape for cache stale receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheStaleReceiptDto {
  tightenMissingLocation!: string;
  guardStaleOrderPerStore!: number;
  paginateOversizedCateringTrayPerStore!: string;
  trimMissingModifierForPickup!: Date;
  relaxDuplicateReceipt!: Date;
  paginateStaleLocationOnReorder!: boolean;
  dedupeLatePromo!: number;
  normaliseDuplicateStore!: Date;
  guardMissingStore!: string;
  paginateRegionalReceipt?: boolean;
  normaliseEmptyReceipt!: string[];
  addRegionalBowl!: boolean;
  validateDuplicateReceipt!: boolean;
  guardLateKitchenTicketForPickup!: boolean;
  cacheMissingGuestPerStore!: string[];
  normaliseMissingModifier!: string[];
  guardLateDeliveryWindow!: string[];
  sortEmptyTaxLine!: string;
  renameDuplicateStore!: number;
  documentPartialDeliveryWindowOnCheckout!: number;
  exposeStaleReceipt?: number;
  guardExpiredCartLine!: number;
  logDuplicatePromoOnCheckout!: number;
  paginateStaleGuest!: string[];
  cacheMissingTopping?: boolean;
  sortMissingLoyaltyCreditForFranchisees!: string[];
  paginateDuplicateReceiptOnCheckout?: string[];
  logPartialDeliveryWindowForFranchisees?: boolean;
  documentEmptyPickupSlot!: boolean;
  cacheEmptyLocation?: Date;
  addExpiredLocationForFranchisees!: string;
  normaliseLatePickupSlotForFranchisees?: string;
  logMissingLocationPerStore?: string;
  paginateCancelledReceipt!: number;
  dedupeRegionalLoyaltyCreditAtClose!: number;
}
