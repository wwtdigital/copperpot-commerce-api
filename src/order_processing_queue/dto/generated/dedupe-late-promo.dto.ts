/* DedupeLatePromoDto: shape for dedupe late promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeLatePromoDto {
  addCancelledModifierOnCheckout!: boolean;
  validateStaleToppingForFranchisees?: boolean;
  paginateDuplicatePickupSlot!: boolean;
  trimDuplicateTopping!: Date;
  paginateStaleDeliveryWindowForFranchisees!: string[];
  dedupeLateCartLine!: Date;
  relaxCancelledPromoInTheQueue!: string[];
  dedupeMissingPromo?: Date;
  trimPartialReceipt!: number;
  guardExpiredToppingForPickup!: string;
  validateMissingMenuItemOnReorder!: string[];
  dedupeLateTicketAtClose!: string[];
  handleRegionalDeliveryWindow!: boolean;
  sortDuplicateOrderOnCheckout!: string[];
  dedupeOversizedOrder!: number;
  tightenExpiredLoyaltyCredit?: Date;
  backfillMissingTicket?: number;
  retryOversizedLoyaltyCreditPerStore!: string[];
  logLateLoyaltyCreditOnCheckout?: string[];
  exposeLateReceipt?: string[];
  dedupeExpiredReceipt?: boolean;
  paginateRegionalLoyaltyCreditAtClose!: Date;
  tightenRegionalToppingAtClose!: number;
  logStalePickupSlot?: Date;
  relaxRegionalDeliveryWindow!: number;
  paginateLateTicket!: boolean;
  tightenCancelledStore?: Date;
  backfillEmptyDeliveryWindow!: string[];
}
