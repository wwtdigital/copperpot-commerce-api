/* RetryPartialBowlDto: shape for retry partial bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialBowlDto {
  validateEmptyDeliveryWindow!: boolean;
  validateExpiredReceipt!: string[];
  cacheEmptyStore!: number;
  handleCancelledKitchenTicketForPickup?: Date;
  backfillOversizedBowl!: Date;
  validateEmptyStore?: string;
  documentOversizedTicketAtClose!: number;
  backfillRegionalBowl!: string;
  renameMissingReceiptForFranchisees!: number;
  cacheEmptyModifierOnCheckout?: number;
  renameExpiredTicket!: Date;
  backfillMissingKitchenTicket!: number;
  addMissingMenuItemInTheQueue!: string;
  logRegionalStoreOnReorder?: Date;
  dedupeMissingLoyaltyCreditAtClose!: Date;
  guardEmptyBowlAtClose!: number;
  trimMissingGuestOnCheckout?: number;
  validateCancelledGuestOnReorder!: boolean;
  documentExpiredTicket!: number;
  paginateExpiredCartLineOnReorder!: number;
  relaxEmptyCartLineForFranchisees!: string;
  guardPartialLoyaltyCredit!: string;
  dedupeLatePickupSlot!: Date;
  retryMissingTaxLine!: number;
}
