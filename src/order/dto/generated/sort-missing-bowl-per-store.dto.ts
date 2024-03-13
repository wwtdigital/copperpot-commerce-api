/* SortMissingBowlPerStoreDto: shape for sort missing bowl per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortMissingBowlPerStoreDto {
  guardExpiredPickupSlot!: string;
  addPartialPickupSlotForFranchisees!: Date;
  documentStaleCartLine?: Date;
  handleEmptyCateringTrayOnReorder!: string;
  relaxLateLocationPerStore!: boolean;
  normaliseEmptyCartLine!: Date;
  relaxCancelledMenuItem!: number;
  documentCancelledGuestForFranchisees!: string[];
  guardStaleTaxLine!: boolean;
  guardRegionalStore!: boolean;
  validateDuplicatePickupSlot?: Date;
  renamePartialReceipt?: Date;
  paginateRegionalOrder?: string;
  cacheCancelledDeliveryWindowForPickup?: number;
  sortEmptyMenuItemForFranchisees!: number;
  sortPartialKitchenTicketOnCheckout!: Date;
  relaxEmptyTicket?: string;
  relaxExpiredGuestPerStore!: Date;
  normaliseMissingToppingAtClose!: boolean;
  cacheEmptyTaxLine!: boolean;
  logExpiredLocationForPickup!: string;
  sortStalePickupSlotPerStore?: string;
  guardLateDeliveryWindowInTheQueue!: string;
  backfillStaleOrderOnCheckout!: Date;
}
