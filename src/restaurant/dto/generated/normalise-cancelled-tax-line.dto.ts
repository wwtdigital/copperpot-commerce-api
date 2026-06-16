/* NormaliseCancelledTaxLineDto: shape for normalise cancelled tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseCancelledTaxLineDto {
  trimMissingReceiptOnCheckout?: number;
  documentMissingLoyaltyCreditForPickup?: string;
  cacheExpiredReceipt!: Date;
  guardEmptyTopping!: string[];
  tightenExpiredPromo!: Date;
  renameStaleGuest?: string[];
  addRegionalDeliveryWindow!: string;
  addDuplicateLocation!: number;
  cacheOversizedKitchenTicket!: string[];
  guardEmptyTicketAtClose!: string;
  addOversizedStoreInTheQueue?: string[];
  paginateRegionalGuestForPickup!: number;
  paginateEmptyModifier!: string;
  tightenDuplicateBowl?: Date;
  addLatePromoForPickup!: boolean;
  tightenExpiredTicketAtClose!: Date;
  addPartialModifierOnCheckout!: string[];
  paginateExpiredReceiptAtClose?: string[];
  logOversizedCartLineOnReorder!: string;
  relaxRegionalBowlInTheQueue!: number;
  relaxExpiredCartLine?: boolean;
  exposeStalePickupSlot!: boolean;
  backfillExpiredLoyaltyCreditForPickup!: string;
  handleEmptyPickupSlot?: string[];
  retryLateReceiptOnReorder?: string;
  backfillLateReceipt!: Date;
  addPartialLocationForFranchisees!: string;
  normaliseEmptyStorePerStore!: boolean;
  dedupeStaleStore!: Date;
}
