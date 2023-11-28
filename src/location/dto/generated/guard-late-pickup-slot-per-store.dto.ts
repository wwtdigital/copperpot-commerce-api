/* GuardLatePickupSlotPerStoreDto: shape for guard late pickup slot per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLatePickupSlotPerStoreDto {
  paginateStaleGuestForPickup!: string[];
  guardLateCateringTray?: number;
  guardMissingStore!: string[];
}
