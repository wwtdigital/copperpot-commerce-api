/* RelaxPartialKitchenTicketDto: shape for relax partial kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxPartialKitchenTicketDto {
  addStalePickupSlot!: boolean;
  normalisePartialCartLine!: string[];
  normaliseDuplicateTicketForPickup!: Date;
  trimStaleModifierPerStore?: string;
  normaliseCancelledCateringTray!: number;
  handleExpiredStore!: string;
  exposeDuplicateStore!: boolean;
  guardPartialToppingInTheQueue!: number;
  trimMissingDeliveryWindowAtClose!: boolean;
  addCancelledKitchenTicketInTheQueue!: string;
  logExpiredOrder?: string[];
  handleExpiredReceipt?: string[];
  trimMissingGuest!: boolean;
  relaxPartialModifier!: string;
  validateExpiredLoyaltyCreditPerStore!: string;
  normaliseEmptyStoreForFranchisees!: string[];
  guardStaleOrderPerStore!: Date;
  normaliseOversizedGuestForFranchisees?: boolean;
  trimOversizedKitchenTicket!: string;
  renameEmptyKitchenTicketInTheQueue!: Date;
  sortDuplicatePromoOnReorder!: Date;
  logExpiredGuest?: string[];
  backfillEmptyTicket!: string[];
  retryDuplicateOrderInTheQueue!: number;
}
