/* RenameCancelledCartLineForFranchiseesDto: shape for rename cancelled cart line for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledCartLineForFranchiseesDto {
  addStaleStoreAtClose!: Date;
  trimPartialCartLine!: Date;
  exposeStaleTicket!: string;
  documentPartialCateringTray?: string[];
  cacheOversizedCartLineInTheQueue?: boolean;
  paginateDuplicateOrder!: Date;
  cacheCancelledMenuItem?: Date;
  exposeMissingStore!: Date;
  documentEmptyCateringTrayOnReorder?: string;
  cacheStaleBowlForPickup?: string[];
  trimEmptyTicket!: string[];
  cacheRegionalCartLineOnCheckout!: string;
  renameStalePickupSlot!: string;
  logEmptyPickupSlot!: string[];
  trimCancelledPromoOnCheckout!: boolean;
  trimCancelledCateringTrayAtClose?: boolean;
  addPartialGuestOnCheckout!: Date;
  logOversizedStoreOnCheckout!: number;
  retryLateMenuItemPerStore?: number;
  guardExpiredCateringTray!: Date;
  guardExpiredLoyaltyCredit!: Date;
}
