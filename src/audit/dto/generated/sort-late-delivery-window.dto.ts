/* SortLateDeliveryWindowDto: shape for sort late delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateDeliveryWindowDto {
  documentLatePickupSlot!: string;
  guardEmptyDeliveryWindowAtClose!: string;
  retryMissingBowl!: number;
  tightenStaleBowlAtClose?: number;
  retryMissingLocationOnReorder?: number;
  cacheExpiredCateringTray?: number;
}
