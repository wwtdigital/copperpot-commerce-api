/* ValidateLateToppingAtCloseDto: shape for validate late topping at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateLateToppingAtCloseDto {
  relaxPartialModifierOnCheckout?: Date;
  backfillPartialOrderInTheQueue!: string[];
  guardLateKitchenTicketOnReorder?: string;
  sortStalePickupSlot!: string;
  trimLateToppingForPickup!: number;
  guardRegionalTaxLine!: boolean;
  backfillOversizedCartLineOnReorder!: string[];
  dedupeExpiredDeliveryWindowOnCheckout!: boolean;
  cacheRegionalLocationOnReorder!: Date;
  addMissingCartLine!: boolean;
  handleLateModifier!: string;
  retryStaleTicket!: string;
  validateCancelledTaxLineForFranchisees!: number;
  relaxOversizedLoyaltyCreditInTheQueue!: boolean;
  retryPartialStore!: boolean;
  trimMissingStoreOnCheckout!: string[];
  tightenCancelledToppingInTheQueue!: number;
  sortOversizedBowl!: string;
  documentRegionalModifierForFranchisees?: Date;
  sortEmptyGuestForPickup!: string[];
  sortLateReceipt!: Date;
  handleCancelledTopping?: string[];
  dedupeStaleCateringTray!: string;
  handleLateCartLineOnReorder!: string[];
}
