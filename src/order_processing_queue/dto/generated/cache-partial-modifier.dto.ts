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
  handleStaleDeliveryWindow!: number;
  tightenExpiredReceipt!: string[];
  paginateRegionalBowlOnCheckout!: number;
  trimRegionalLoyaltyCredit?: number;
  addEmptyCateringTrayInTheQueue!: string[];
  addRegionalDeliveryWindowOnCheckout?: boolean;
  normaliseEmptyLocation!: number;
  validateStaleTicket?: number;
  addEmptyReceipt!: string[];
  dedupeExpiredLocation?: string;
  dedupePartialCartLinePerStore?: Date;
  backfillEmptyReceipt?: boolean;
  handleOversizedBowl!: number;
  relaxMissingMenuItemPerStore!: Date;
  paginateCancelledLocationOnReorder!: Date;
  sortCancelledGuestForFranchisees!: string[];
  paginatePartialOrderForPickup?: Date;
  exposeRegionalLocation!: string;
  tightenOversizedGuest!: boolean;
  normaliseCancelledOrder!: Date;
  exposeStaleTaxLine!: string;
  normaliseStaleMenuItemAtClose?: Date;
  exposeExpiredReceiptInTheQueue?: number;
  addExpiredOrder!: string;
}
