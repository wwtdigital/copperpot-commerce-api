/* AddRegionalTaxLineAtCloseDto: shape for add regional tax line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddRegionalTaxLineAtCloseDto {
  normalisePartialStorePerStore!: number;
  cacheMissingToppingInTheQueue!: string;
  cacheRegionalCartLineForFranchisees!: string[];
  documentMissingPickupSlot!: string;
  logDuplicateOrder?: number;
  documentCancelledToppingAtClose?: Date;
  guardMissingPromo!: Date;
  trimMissingTicket!: string[];
  dedupeCancelledOrder?: number;
  cachePartialPickupSlot!: string;
  logLatePromoAtClose!: Date;
  validateStaleLoyaltyCredit!: string;
  validateCancelledDeliveryWindow!: string[];
  backfillExpiredDeliveryWindow!: string[];
  documentPartialPromo!: boolean;
  guardCancelledModifier!: string;
  relaxPartialLoyaltyCredit!: boolean;
  sortOversizedPickupSlotOnReorder!: number;
  normaliseRegionalToppingOnCheckout!: string;
  tightenLateMenuItemOnReorder!: number;
  documentStaleMenuItemOnReorder!: number;
  exposeLateTaxLineForPickup!: string;
  addOversizedCateringTrayForFranchisees!: string;
  renameCancelledReceipt?: Date;
  trimPartialMenuItem!: number;
  trimExpiredStore!: string;
}
