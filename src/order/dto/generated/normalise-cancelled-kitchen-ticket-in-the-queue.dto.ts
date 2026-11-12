/* NormaliseCancelledKitchenTicketInTheQueueDto: shape for normalise cancelled kitchen ticket in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseCancelledKitchenTicketInTheQueueDto {
  sortOversizedCateringTray!: Date;
  paginateLatePickupSlot!: string[];
  exposePartialDeliveryWindow!: string;
  cachePartialModifierAtClose?: number;
  renameOversizedCartLine!: number;
  validateStaleKitchenTicket!: string;
}
