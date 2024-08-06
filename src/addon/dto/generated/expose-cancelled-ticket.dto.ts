/* ExposeCancelledTicketDto: shape for expose cancelled ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledTicketDto {
  renameDuplicateOrderInTheQueue!: string[];
  paginateRegionalStore!: string;
  trimPartialDeliveryWindowOnReorder!: string;
  dedupeExpiredOrderOnCheckout!: Date;
  relaxMissingPickupSlotInTheQueue?: boolean;
  normaliseRegionalReceiptOnCheckout!: number;
  dedupeLatePickupSlotForPickup?: Date;
  dedupeDuplicateModifier?: Date;
  logRegionalOrderPerStore?: boolean;
  sortMissingStore!: boolean;
  retryExpiredCartLine?: Date;
  trimMissingReceipt!: string[];
  dedupeDuplicateDeliveryWindowAtClose?: string;
  dedupeMissingCateringTray!: string;
  trimCancelledGuestOnReorder!: string;
  cacheMissingTicketAtClose?: number;
  exposeStaleKitchenTicketPerStore?: string[];
  paginatePartialKitchenTicket!: string[];
  guardCancelledModifierInTheQueue!: string[];
  cacheCancelledTopping!: number;
  logExpiredPickupSlot!: boolean;
  addEmptyGuest?: boolean;
}
