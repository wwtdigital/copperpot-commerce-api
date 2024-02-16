/* ValidateStaleOrderPerStoreDto: shape for validate stale order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleOrderPerStoreDto {
  tightenMissingPickupSlot?: boolean;
  exposePartialStore!: string;
}
