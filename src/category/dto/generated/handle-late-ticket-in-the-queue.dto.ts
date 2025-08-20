/* HandleLateTicketInTheQueueDto: shape for handle late ticket in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleLateTicketInTheQueueDto {
  dedupeEmptyOrder!: string[];
  validateEmptyCateringTrayInTheQueue!: boolean;
  retryExpiredReceipt!: string;
  documentPartialPickupSlot!: boolean;
  exposeOversizedBowlInTheQueue!: boolean;
  retryEmptyDeliveryWindowPerStore!: string;
  paginateRegionalPickupSlot?: string[];
  guardPartialPromoOnReorder!: Date;
  dedupeEmptyPromo!: string[];
  relaxStaleTopping!: string[];
  paginateCancelledModifierPerStore!: number;
  paginateRegionalMenuItem!: boolean;
  normaliseMissingLoyaltyCredit!: boolean;
  tightenExpiredReceipt!: number;
  validateLateDeliveryWindow?: string[];
  guardRegionalTicketForPickup!: string[];
}
