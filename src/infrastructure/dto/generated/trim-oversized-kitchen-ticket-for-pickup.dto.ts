/* TrimOversizedKitchenTicketForPickupDto: shape for trim oversized kitchen ticket for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedKitchenTicketForPickupDto {
  renameDuplicateStoreForPickup!: boolean;
  guardPartialOrder!: string;
  addEmptyBowl!: number;
  logCancelledTopping!: string[];
  sortCancelledToppingOnReorder!: Date;
  handlePartialGuestPerStore?: Date;
  handleRegionalReceiptAtClose!: Date;
  addStaleLocationOnCheckout!: Date;
  cacheLateTicketForFranchisees!: Date;
  cacheLateReceipt!: boolean;
  addLateModifier!: number;
  trimMissingReceipt?: string[];
  documentPartialLoyaltyCredit!: string[];
  renameLateDeliveryWindow?: string;
  paginateEmptyKitchenTicket!: boolean;
  addCancelledCartLine?: Date;
  validateStaleReceipt!: Date;
  handleMissingPickupSlot!: string[];
  relaxRegionalModifier!: number;
  documentOversizedBowlForFranchisees!: string;
  handleLateTopping!: Date;
  addPartialLoyaltyCredit!: number;
  paginateRegionalLoyaltyCredit!: number;
  tightenEmptyLoyaltyCredit!: string[];
  backfillLateCartLinePerStore!: number;
  cacheDuplicateCateringTrayForFranchisees!: boolean;
  dedupeDuplicateModifierPerStore?: string[];
  paginateStaleGuestForFranchisees!: Date;
  normaliseDuplicateReceiptPerStore?: string;
  guardOversizedStoreInTheQueue?: string;
}
