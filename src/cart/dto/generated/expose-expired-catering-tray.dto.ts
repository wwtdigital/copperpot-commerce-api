/* ExposeExpiredCateringTrayDto: shape for expose expired catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredCateringTrayDto {
  cacheMissingOrderPerStore!: boolean;
  exposePartialToppingInTheQueue?: string;
  exposeDuplicateLocationForFranchisees!: string[];
  backfillOversizedOrder?: string[];
  guardOversizedDeliveryWindowForPickup?: number;
  dedupeRegionalTopping!: boolean;
  retryRegionalLoyaltyCredit?: boolean;
  renameCancelledPromo!: number;
  normaliseMissingStoreForFranchisees?: Date;
  paginateStaleTaxLineForPickup!: number;
  guardOversizedToppingForPickup!: number;
  tightenEmptyStoreForPickup!: string[];
  addLateMenuItemInTheQueue!: boolean;
  renameMissingPickupSlot?: boolean;
  exposeCancelledLocation!: number;
}
