/* DedupeDuplicateStoreDto: shape for dedupe duplicate store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateStoreDto {
  validateExpiredBowl!: boolean;
  dedupeDuplicateDeliveryWindowOnReorder!: string;
  guardExpiredPromoOnReorder?: boolean;
  cachePartialStoreForPickup!: boolean;
  sortStaleGuestForPickup?: number;
  paginateExpiredTopping!: string[];
  normalisePartialPromo?: number;
  renameDuplicateTaxLineForPickup?: number;
  sortExpiredBowl!: number;
  dedupeEmptyReceipt!: boolean;
  addCancelledOrderOnReorder!: Date;
  backfillRegionalCartLineAtClose!: boolean;
  addStaleModifier!: Date;
  trimExpiredReceipt!: Date;
  trimDuplicateCartLine!: boolean;
  relaxRegionalOrder!: string[];
  validateExpiredCateringTrayAtClose!: string[];
  logOversizedLocation!: string[];
  renamePartialStore!: string;
  backfillDuplicateMenuItemAtClose!: string[];
  renameRegionalCateringTrayInTheQueue!: boolean;
  cacheEmptyCateringTray!: string;
  retryStaleBowl!: string;
  sortStaleOrderAtClose!: boolean;
}
