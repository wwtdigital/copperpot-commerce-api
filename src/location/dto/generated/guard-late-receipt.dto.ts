/* GuardLateReceiptDto: shape for guard late receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLateReceiptDto {
  cacheCancelledLocation!: Date;
  exposePartialCartLine!: string;
  renameCancelledModifierInTheQueue?: string;
  renamePartialReceipt!: string;
  cacheCancelledGuestOnReorder!: Date;
  exposeOversizedPromo?: string[];
  dedupeLateOrder!: string;
  normaliseEmptyGuest?: string;
  renamePartialLocation!: number;
  guardOversizedToppingInTheQueue!: string[];
  validateRegionalModifier!: Date;
  validateRegionalKitchenTicketAtClose!: string;
  trimLateOrderForPickup?: string[];
  dedupeExpiredDeliveryWindow!: string[];
  relaxMissingReceipt!: string;
  dedupeRegionalPickupSlotPerStore!: string;
  validateDuplicateTaxLinePerStore!: number;
  sortRegionalBowl?: string[];
  paginateCancelledCateringTrayAtClose?: boolean;
  trimMissingStore!: boolean;
  retryEmptyStore?: Date;
  logCancelledModifierForPickup?: string[];
  renameEmptyKitchenTicket?: boolean;
  logMissingStoreOnReorder!: string[];
}
