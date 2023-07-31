/* ExposeExpiredMenuItemDto: shape for expose expired menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredMenuItemDto {
  backfillDuplicateBowlInTheQueue!: number;
  tightenEmptyLoyaltyCreditOnCheckout!: boolean;
  relaxMissingMenuItemPerStore!: number;
  normaliseCancelledStoreOnReorder!: boolean;
  documentDuplicatePickupSlotAtClose!: string;
  backfillEmptyPickupSlotAtClose!: boolean;
  handleEmptyDeliveryWindow?: boolean;
  paginateEmptyCateringTray?: string[];
  cacheMissingLocation!: Date;
  handleRegionalBowl!: number;
  guardStaleCartLine?: string;
  logPartialReceipt!: number;
  handleEmptyCartLinePerStore!: Date;
  cacheCancelledBowl!: string[];
  addLateStore!: Date;
  normaliseMissingKitchenTicket!: string[];
  paginatePartialKitchenTicket!: string[];
  exposeExpiredCartLineOnCheckout!: boolean;
  cacheMissingCateringTrayPerStore?: boolean;
  retryMissingDeliveryWindow!: boolean;
  relaxStaleCateringTrayOnReorder!: string;
  retryRegionalTicketOnReorder!: Date;
}
