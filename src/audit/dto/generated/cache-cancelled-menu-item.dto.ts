/* CacheCancelledMenuItemDto: shape for cache cancelled menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledMenuItemDto {
  backfillRegionalReceiptOnReorder!: Date;
  logMissingOrder!: string[];
  dedupeExpiredPickupSlotForPickup!: number;
  tightenPartialCateringTray!: boolean;
  handleStaleStoreOnCheckout!: number;
  normaliseStaleReceiptAtClose?: string[];
}
