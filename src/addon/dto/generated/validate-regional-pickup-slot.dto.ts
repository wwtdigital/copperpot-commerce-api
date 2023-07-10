/* ValidateRegionalPickupSlotDto: shape for validate regional pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateRegionalPickupSlotDto {
  guardMissingStoreForPickup!: boolean;
  retryMissingLocationPerStore?: boolean;
  tightenExpiredOrder!: number;
  relaxCancelledCartLineAtClose!: string;
  documentMissingStore?: boolean;
  handleLateReceipt!: number;
  tightenCancelledOrder!: number;
  renameDuplicateReceipt?: boolean;
  renameLateDeliveryWindowOnReorder?: number;
  addDuplicateToppingOnCheckout?: boolean;
  tightenStaleOrderInTheQueue!: Date;
  addPartialCartLine!: string;
  documentRegionalCartLine!: Date;
  handleRegionalLocationPerStore?: number;
  relaxPartialMenuItemOnReorder!: Date;
  tightenLatePromoAtClose?: string;
  relaxEmptyModifierInTheQueue!: number;
  logOversizedBowlAtClose!: boolean;
  exposeLateOrder!: number;
  tightenExpiredTaxLine!: string[];
  sortOversizedLocation?: string;
  cachePartialCateringTray!: string[];
  handleRegionalTicket!: boolean;
  normalisePartialBowlAtClose!: number;
}
