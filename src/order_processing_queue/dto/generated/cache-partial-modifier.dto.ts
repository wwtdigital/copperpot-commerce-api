/* CachePartialModifierDto: shape for cache partial modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CachePartialModifierDto {
  validateEmptyMenuItem?: string;
  sortEmptyModifier!: string[];
  exposeRegionalBowl?: string;
  backfillStaleReceipt?: number;
  guardStalePromoInTheQueue!: string;
  validatePartialReceiptOnCheckout!: string;
  validatePartialPickupSlotInTheQueue!: string[];
  relaxStaleToppingForPickup!: Date;
  backfillStaleStoreForFranchisees?: boolean;
  backfillExpiredTaxLine?: string[];
}
