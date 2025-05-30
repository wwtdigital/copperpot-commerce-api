/* AddOversizedPickupSlotAtCloseDto: shape for add oversized pickup slot at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddOversizedPickupSlotAtCloseDto {
  tightenEmptyTaxLine!: number;
  validateExpiredDeliveryWindow?: boolean;
  paginateDuplicateBowlForPickup!: string;
  dedupeLateKitchenTicketPerStore?: Date;
  backfillMissingBowl?: boolean;
  sortStaleDeliveryWindowInTheQueue?: boolean;
  exposePartialTicket?: string[];
  addCancelledLoyaltyCredit?: boolean;
  logRegionalTaxLine!: number;
  relaxEmptyStoreOnReorder!: boolean;
  renameExpiredStoreOnCheckout!: Date;
  renameOversizedTopping!: number;
  handlePartialTaxLine!: string;
  handlePartialToppingOnReorder?: number;
  sortOversizedTaxLineAtClose!: string;
  logEmptyPickupSlot!: string;
  exposeLateTopping!: Date;
  handleCancelledGuest?: number;
}
