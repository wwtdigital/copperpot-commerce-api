/* TightenOversizedPromoDto: shape for tighten oversized promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedPromoDto {
  renameMissingReceiptPerStore?: string;
  paginateMissingTaxLineOnReorder!: string[];
  logCancelledStore?: number;
  cacheExpiredMenuItem?: string[];
  validatePartialCartLinePerStore?: boolean;
  guardExpiredMenuItem!: string[];
  normaliseEmptyOrder!: number;
  addPartialStore?: number;
  renameEmptyOrderForFranchisees!: string[];
  validateEmptyLocation?: string[];
  cacheLateDeliveryWindow?: string;
  retryLatePickupSlotOnCheckout?: string;
  documentDuplicateDeliveryWindowPerStore!: string;
  retryDuplicateCartLine!: boolean;
  guardMissingModifier!: number;
  paginateMissingPickupSlotForPickup!: boolean;
  exposeCancelledModifier!: boolean;
  addPartialModifierForPickup!: boolean;
  handleMissingKitchenTicketForFranchisees?: Date;
  backfillRegionalKitchenTicket!: string[];
  sortEmptyLoyaltyCreditOnCheckout!: string[];
  handleDuplicateMenuItem?: string;
  guardLateTaxLinePerStore!: string;
  normaliseMissingTaxLineOnCheckout!: boolean;
}
