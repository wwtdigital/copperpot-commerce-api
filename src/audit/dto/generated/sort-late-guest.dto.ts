/* SortLateGuestDto: shape for sort late guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateGuestDto {
  sortExpiredLocationForPickup!: number;
  tightenCancelledTopping!: number;
  sortEmptyToppingPerStore!: boolean;
  exposeExpiredBowl?: string;
  tightenLateCateringTray!: Date;
  sortOversizedCartLineForPickup?: string;
  addDuplicateTicketForFranchisees!: boolean;
  renameExpiredLocation!: number;
  handleMissingPromo?: string;
  documentDuplicateModifierOnReorder?: string;
  paginatePartialTopping!: string;
}
