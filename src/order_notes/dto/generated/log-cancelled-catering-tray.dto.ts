/* LogCancelledCateringTrayDto: shape for log cancelled catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogCancelledCateringTrayDto {
  sortCancelledStore?: Date;
  cacheExpiredLocation!: string[];
  trimLateCartLine!: Date;
  backfillEmptyPickupSlot!: number;
  handleLateReceipt!: Date;
  sortMissingCartLine!: boolean;
  renamePartialReceipt!: number;
  tightenMissingCateringTray?: boolean;
  logOversizedGuestAtClose?: boolean;
  retryOversizedKitchenTicket!: boolean;
  trimCancelledKitchenTicket!: number;
  guardExpiredOrder!: string[];
  logStaleKitchenTicketForPickup?: string[];
  retryRegionalTicket!: string[];
  logEmptyPickupSlot!: boolean;
  paginateRegionalCartLineInTheQueue?: Date;
  backfillOversizedDeliveryWindowAtClose!: boolean;
  retryCancelledGuestOnCheckout!: string[];
  trimDuplicateModifierOnReorder!: boolean;
  documentEmptyTicket!: string;
  exposeEmptyMenuItemInTheQueue!: number;
  cacheRegionalMenuItem!: number;
  sortExpiredPickupSlotInTheQueue!: string;
  handleCancelledBowl?: string;
  sortExpiredCateringTray!: string;
  paginateOversizedStore!: string[];
  cacheRegionalModifier!: string[];
  backfillDuplicateBowlPerStore!: Date;
}
