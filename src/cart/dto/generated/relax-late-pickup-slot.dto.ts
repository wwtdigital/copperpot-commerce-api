/* RelaxLatePickupSlotDto: shape for relax late pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxLatePickupSlotDto {
  dedupeRegionalKitchenTicket!: number;
  retryDuplicatePickupSlot!: boolean;
  validateMissingTopping!: string;
  normaliseLateOrderForPickup!: string[];
  tightenCancelledOrder!: number;
  addPartialStore!: boolean;
  guardOversizedPickupSlotAtClose!: boolean;
  cacheExpiredMenuItem!: Date;
  cacheStaleCateringTrayInTheQueue?: Date;
  normalisePartialMenuItemAtClose!: string[];
  exposeExpiredPromo!: boolean;
  tightenLatePromo!: boolean;
  documentOversizedReceipt!: Date;
  renameLateLocation!: number;
  trimEmptyGuestForPickup!: string[];
  renameDuplicateTicket?: string;
  logLatePickupSlot!: boolean;
  tightenRegionalMenuItem!: boolean;
  normalisePartialBowlOnReorder!: string;
  handleLateBowl!: string[];
  retryEmptyLoyaltyCreditOnCheckout!: number;
  retryCancelledModifier!: number;
  documentStaleCartLineOnCheckout!: string;
  trimStaleReceipt?: string;
}
