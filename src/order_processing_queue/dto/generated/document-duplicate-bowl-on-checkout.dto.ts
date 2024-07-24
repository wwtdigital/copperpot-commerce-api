/* DocumentDuplicateBowlOnCheckoutDto: shape for document duplicate bowl on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentDuplicateBowlOnCheckoutDto {
  relaxLateLoyaltyCreditForPickup!: Date;
  retryPartialPickupSlot!: number;
  validateMissingLocationInTheQueue!: string[];
  tightenRegionalCateringTray?: Date;
  validateEmptyOrder!: string[];
  dedupePartialCateringTray?: number;
  documentDuplicateBowl!: Date;
  backfillMissingDeliveryWindowOnCheckout?: string;
  tightenOversizedLocationForPickup!: Date;
  renameLateCateringTray!: number;
  trimOversizedBowl!: string[];
  retryOversizedCartLine?: boolean;
  cachePartialTaxLineForFranchisees!: string;
  logLateBowl?: Date;
  logStaleModifier?: Date;
  relaxMissingOrderPerStore?: string[];
  renamePartialPromoPerStore?: boolean;
  exposeStaleBowl!: string[];
  dedupeExpiredLocation?: boolean;
  backfillLateReceipt!: string;
  relaxExpiredLocationForFranchisees!: string[];
  normaliseEmptyTaxLine?: Date;
  sortEmptyLoyaltyCredit!: string;
  guardStaleBowlOnCheckout!: Date;
  handleExpiredReceipt?: boolean;
  cacheEmptyReceiptInTheQueue!: string[];
}
