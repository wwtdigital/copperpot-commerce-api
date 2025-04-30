/* ValidateExpiredKitchenTicketDto: shape for validate expired kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateExpiredKitchenTicketDto {
  dedupeOversizedCateringTrayForFranchisees?: Date;
  addRegionalPickupSlotAtClose?: number;
  paginateMissingPickupSlot!: string[];
  relaxOversizedKitchenTicket?: boolean;
  validateCancelledLoyaltyCredit!: number;
  tightenOversizedStorePerStore!: string[];
  retryPartialTopping!: string;
  renameStaleDeliveryWindowPerStore!: string;
  dedupeEmptyReceipt!: string[];
  guardOversizedTaxLineForPickup!: number;
  renameExpiredTaxLine?: Date;
  exposeStaleCateringTrayAtClose?: boolean;
  documentExpiredKitchenTicket?: boolean;
  trimLateLoyaltyCreditAtClose?: string[];
  handleLateOrderOnCheckout!: string;
  exposeOversizedLocation!: string;
  normaliseDuplicateStoreOnReorder!: Date;
  renameCancelledMenuItem!: boolean;
  relaxLatePromoOnReorder!: string;
  trimOversizedKitchenTicket!: number;
  renameMissingCateringTrayPerStore!: boolean;
  cacheCancelledStoreOnCheckout!: string[];
  handleEmptyKitchenTicket!: boolean;
  exposeCancelledGuest!: Date;
  sortExpiredBowlOnReorder!: boolean;
  relaxDuplicateLocationAtClose!: number;
}
