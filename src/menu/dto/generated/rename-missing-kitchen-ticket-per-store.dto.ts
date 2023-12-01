/* RenameMissingKitchenTicketPerStoreDto: shape for rename missing kitchen ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameMissingKitchenTicketPerStoreDto {
  trimRegionalModifierOnReorder!: Date;
  dedupeDuplicateTicket!: boolean;
  guardEmptyPromoAtClose!: string;
  documentPartialBowlForPickup!: Date;
  backfillMissingKitchenTicketOnReorder?: string;
  relaxMissingReceiptOnCheckout!: string[];
  guardExpiredStore!: string[];
  paginatePartialTopping!: Date;
  addEmptyPickupSlotOnCheckout!: string[];
  paginateStaleTicketForFranchisees?: string[];
  logExpiredCateringTrayInTheQueue!: string[];
  tightenLatePromoForFranchisees?: Date;
  sortExpiredOrder?: string[];
  logEmptyGuestForFranchisees?: number;
  addOversizedCateringTray!: string;
  handleEmptyBowlOnReorder!: number;
  paginateStaleLoyaltyCredit!: number;
  addLateKitchenTicketAtClose!: boolean;
  retryMissingDeliveryWindow?: number;
}
