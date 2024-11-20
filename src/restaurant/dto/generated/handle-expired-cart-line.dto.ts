/* HandleExpiredCartLineDto: shape for handle expired cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleExpiredCartLineDto {
  guardStaleMenuItemForFranchisees!: string;
  addCancelledKitchenTicket!: string[];
  paginateExpiredLocationForPickup!: string[];
  normaliseExpiredCateringTray!: number;
  paginateExpiredDeliveryWindow!: boolean;
  trimMissingModifier!: Date;
  guardExpiredReceipt!: Date;
  normalisePartialPickupSlot!: string[];
  dedupeEmptyLoyaltyCredit!: string[];
  renameExpiredTicketOnCheckout!: Date;
  logDuplicateLoyaltyCredit!: Date;
  backfillExpiredPickupSlot!: Date;
  logOversizedCateringTrayOnReorder!: string[];
  dedupeMissingKitchenTicketAtClose!: string[];
  handleEmptyCateringTray?: boolean;
  sortRegionalGuestInTheQueue!: number;
  renameCancelledTaxLine!: string[];
  renamePartialBowl!: boolean;
  retryMissingPickupSlot!: string[];
  sortDuplicateOrder!: number;
  relaxPartialTicket!: string;
  exposeEmptyPromoInTheQueue!: string;
  relaxExpiredTicket!: Date;
  relaxEmptyOrder!: string;
}
