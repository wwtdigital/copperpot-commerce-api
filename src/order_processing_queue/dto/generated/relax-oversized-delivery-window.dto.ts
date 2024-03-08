/* RelaxOversizedDeliveryWindowDto: shape for relax oversized delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxOversizedDeliveryWindowDto {
  logMissingPickupSlotAtClose?: boolean;
  retryPartialLoyaltyCreditOnReorder!: boolean;
  paginateOversizedOrderOnCheckout?: number;
  dedupeLateMenuItem?: string;
  dedupeExpiredTopping!: boolean;
  exposeLateOrderForPickup!: Date;
  dedupeOversizedLocation!: string[];
  renameMissingCateringTrayOnCheckout?: boolean;
}
