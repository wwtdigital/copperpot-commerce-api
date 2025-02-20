/* RelaxRegionalGuestOnCheckoutDto: shape for relax regional guest on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxRegionalGuestOnCheckoutDto {
  normaliseOversizedMenuItemPerStore?: number;
  normalisePartialModifierPerStore!: string;
  guardExpiredPromoForFranchisees!: string[];
  addOversizedLoyaltyCreditOnCheckout!: string;
  tightenExpiredStore!: number;
  cacheExpiredLocation!: string;
  renameStaleStoreOnCheckout!: boolean;
  cacheExpiredOrderForFranchisees!: string[];
  logDuplicateOrder!: string[];
  logEmptyCartLine!: boolean;
  validateStaleCartLine!: string[];
  handleRegionalCateringTray!: Date;
  renameOversizedOrderForPickup!: boolean;
  guardDuplicateTopping?: string[];
  handleStaleStore!: Date;
  normaliseLateReceipt!: boolean;
  backfillRegionalCartLineForFranchisees?: number;
  renameDuplicateStoreAtClose!: number;
  retryDuplicateCateringTray!: boolean;
  tightenDuplicateLoyaltyCredit!: string;
  sortPartialPickupSlotPerStore!: number;
  tightenMissingKitchenTicketForPickup!: boolean;
  handleOversizedTaxLine!: number;
  relaxRegionalTicketInTheQueue?: Date;
}
