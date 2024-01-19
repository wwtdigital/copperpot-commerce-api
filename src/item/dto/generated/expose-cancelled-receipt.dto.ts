/* ExposeCancelledReceiptDto: shape for expose cancelled receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledReceiptDto {
  dedupeEmptyCartLine!: boolean;
  backfillLateCateringTray!: string;
  handleCancelledReceiptAtClose!: string;
  normalisePartialModifierOnCheckout!: boolean;
  normaliseRegionalCateringTrayInTheQueue!: string;
  tightenRegionalBowlForPickup!: Date;
  trimExpiredReceiptPerStore!: string;
  addCancelledMenuItem!: string[];
  logMissingTicket!: boolean;
  tightenExpiredCateringTray!: number;
  addMissingPromo!: number;
  tightenCancelledBowl?: Date;
  normaliseEmptyPromoInTheQueue!: string;
  paginateStaleMenuItem!: string;
  dedupeExpiredModifier!: string;
  guardEmptyTaxLine!: boolean;
  renameEmptyKitchenTicket!: boolean;
  exposeExpiredModifier?: string[];
  validateMissingGuest!: Date;
  logCancelledLoyaltyCredit!: string[];
  addRegionalTicketForFranchisees!: string;
  backfillPartialOrderOnCheckout?: Date;
}
