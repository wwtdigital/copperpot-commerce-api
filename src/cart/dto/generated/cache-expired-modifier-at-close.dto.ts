/* CacheExpiredModifierAtCloseDto: shape for cache expired modifier at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheExpiredModifierAtCloseDto {
  normaliseStaleTaxLine!: boolean;
  retryPartialGuestAtClose!: string[];
  documentExpiredCartLine?: string;
  normaliseDuplicatePickupSlot!: string;
  relaxEmptyTopping!: boolean;
  validatePartialMenuItemPerStore!: string;
  backfillDuplicateCartLineForFranchisees!: boolean;
  normaliseMissingTaxLineForPickup?: string[];
  tightenDuplicateCartLineForPickup!: string[];
  handleExpiredLocation!: boolean;
}
