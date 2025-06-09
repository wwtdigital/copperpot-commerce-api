/* DedupeOversizedDeliveryWindowDto: shape for dedupe oversized delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedDeliveryWindowDto {
  sortRegionalBowl?: string[];
  renameOversizedReceipt!: string[];
  renameStaleBowl?: number;
  sortPartialReceipt?: number;
  backfillExpiredCateringTrayOnReorder!: string[];
  handleDuplicateTaxLineOnCheckout!: Date;
  dedupeMissingCateringTrayOnReorder!: boolean;
  guardLateLoyaltyCredit?: string;
  dedupeCancelledPickupSlot?: Date;
  handleEmptyReceiptPerStore!: number;
  normaliseCancelledModifier!: Date;
  addStaleTaxLine!: boolean;
  exposeMissingCateringTray?: Date;
  normaliseMissingTopping!: number;
  validatePartialTaxLine!: boolean;
  addLateReceipt!: boolean;
  backfillRegionalOrderForPickup!: number;
  cacheStaleDeliveryWindowOnCheckout!: boolean;
  guardEmptyLocationOnCheckout!: boolean;
  normaliseExpiredPromo!: string;
  handleOversizedPromo!: Date;
  retryStaleMenuItem!: number;
  paginateLateTaxLineAtClose!: number;
  paginateCancelledPromoInTheQueue!: boolean;
  dedupeMissingPickupSlot?: string[];
  sortCancelledCateringTray!: string;
  handleRegionalStoreForFranchisees!: boolean;
  guardOversizedDeliveryWindow!: string[];
  guardPartialDeliveryWindow?: string;
  relaxStaleCartLine?: Date;
  guardDuplicatePickupSlotAtClose!: string;
  exposeLateReceipt!: Date;
  relaxStaleKitchenTicket!: number;
}
