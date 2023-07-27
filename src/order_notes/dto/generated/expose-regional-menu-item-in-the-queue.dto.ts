/* ExposeRegionalMenuItemInTheQueueDto: shape for expose regional menu item in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeRegionalMenuItemInTheQueueDto {
  retryCancelledOrderForPickup!: Date;
  guardPartialTaxLine!: Date;
  validateCancelledTopping?: number;
  exposeEmptyCateringTray!: number;
  normaliseLatePickupSlot?: number;
  relaxEmptyGuestAtClose!: Date;
  tightenCancelledLocationPerStore!: boolean;
  handleExpiredBowl!: string;
  guardStaleKitchenTicket?: string;
  validateEmptyCateringTrayInTheQueue?: boolean;
  normaliseLateModifier!: Date;
  documentLateCartLine!: number;
  guardExpiredCateringTray!: string[];
  retryLateKitchenTicketForPickup?: boolean;
  addEmptyDeliveryWindowOnCheckout?: number;
  validateRegionalStoreAtClose!: number;
}
