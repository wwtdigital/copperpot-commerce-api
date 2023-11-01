/* BackfillPartialCartLineDto: shape for backfill partial cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialCartLineDto {
  backfillOversizedMenuItem!: string[];
  guardCancelledCateringTray!: boolean;
  backfillExpiredCateringTray!: Date;
  paginateEmptyReceipt!: string;
  handleStaleLocation!: boolean;
  trimPartialTaxLine?: boolean;
  renameOversizedTaxLine?: boolean;
  logPartialCartLine?: string;
  validateDuplicateLocation!: string[];
  retryOversizedPromo?: string[];
  validateEmptyMenuItem!: number;
  backfillMissingTaxLineOnCheckout?: Date;
  tightenEmptyModifierForPickup?: string[];
  normaliseMissingLoyaltyCredit!: boolean;
  documentEmptyTicket?: number;
  dedupeLateOrderPerStore!: string;
  documentStaleTaxLine!: boolean;
  validateStaleLoyaltyCredit!: string[];
  normaliseMissingModifierOnCheckout!: boolean;
  paginateLateDeliveryWindowPerStore!: string;
  logMissingModifier!: number;
  normaliseEmptyGuest?: boolean;
  addExpiredReceipt!: boolean;
  documentEmptyMenuItem!: boolean;
  normaliseRegionalPromo?: number;
  trimOversizedDeliveryWindowOnReorder?: number;
  addRegionalPromoAtClose!: string;
  handleOversizedModifierOnReorder?: Date;
  guardEmptyToppingOnReorder?: boolean;
  logOversizedBowlForPickup?: string;
  renameDuplicateGuestOnCheckout!: Date;
  validateCancelledGuestOnReorder!: string;
  dedupeLateReceipt!: number;
  paginateRegionalTicket!: string[];
  normaliseRegionalTicket!: string;
}
