/* LogDuplicateToppingInTheQueueDto: shape for log duplicate topping in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateToppingInTheQueueDto {
  normaliseDuplicateBowlInTheQueue?: Date;
  normaliseDuplicatePromo?: string;
  relaxDuplicatePickupSlot!: string;
  trimEmptyCartLine!: number;
  paginatePartialLocationAtClose!: string;
  normaliseOversizedLocationForPickup!: Date;
  guardOversizedMenuItem?: boolean;
  tightenDuplicateCartLine!: string;
  normaliseOversizedPromo!: boolean;
  validateMissingTopping!: number;
  validateRegionalDeliveryWindowOnReorder?: Date;
  addEmptyReceipt!: boolean;
  relaxExpiredKitchenTicket!: string[];
  backfillRegionalCateringTrayOnCheckout?: boolean;
  normaliseExpiredTaxLine!: number;
  handleOversizedBowlOnCheckout?: number;
  documentMissingKitchenTicketOnCheckout?: string[];
  trimOversizedGuestAtClose!: boolean;
  logLateLocation!: Date;
  relaxDuplicateCartLinePerStore!: number;
  validateMissingCartLine!: string[];
  validateStaleKitchenTicketAtClose!: Date;
  retryMissingModifier!: string;
  tightenMissingStore!: boolean;
}
