/* HandleMissingMenuItemDto: shape for handle missing menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleMissingMenuItemDto {
  paginateDuplicatePickupSlot!: boolean;
  relaxStaleMenuItemAtClose!: Date;
  logRegionalLoyaltyCreditForPickup!: boolean;
  sortOversizedDeliveryWindow!: string;
  addCancelledLoyaltyCredit!: Date;
  dedupeMissingCartLine!: number;
  guardRegionalMenuItemForFranchisees!: boolean;
  tightenStaleMenuItemOnReorder!: number;
}
