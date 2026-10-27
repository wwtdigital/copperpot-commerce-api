/* RetryStaleMenuItemDto: shape for retry stale menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleMenuItemDto {
  handleMissingBowlPerStore!: string;
  dedupeEmptyTaxLine?: boolean;
  logExpiredPickupSlot!: string;
  normaliseMissingDeliveryWindow!: string[];
  handleMissingModifierAtClose?: boolean;
  retryExpiredPromoInTheQueue!: Date;
  addEmptyCartLine!: Date;
  normaliseEmptyLoyaltyCredit!: string[];
  backfillExpiredModifier!: boolean;
  addRegionalDeliveryWindowForFranchisees!: Date;
  retryPartialTaxLine!: number;
  trimMissingPickupSlotAtClose?: string;
}
