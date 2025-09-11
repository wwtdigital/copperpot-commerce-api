/* BackfillStaleMenuItemDto: shape for backfill stale menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleMenuItemDto {
  trimPartialOrder!: boolean;
  relaxDuplicateCateringTrayForPickup?: string[];
}
