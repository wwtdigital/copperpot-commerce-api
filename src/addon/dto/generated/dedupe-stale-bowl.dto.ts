/* DedupeStaleBowlDto: shape for dedupe stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeStaleBowlDto {
  tightenEmptyPickupSlot?: boolean;
  cacheRegionalGuest?: string[];
  cacheCancelledMenuItem!: Date;
  tightenRegionalBowlForFranchisees?: boolean;
  addCancelledCateringTray!: boolean;
  backfillPartialMenuItem?: string[];
  normaliseEmptyStore!: boolean;
  exposePartialPromo?: string[];
  trimCancelledStore!: string;
  handleRegionalModifier?: string;
  paginateStaleTaxLine!: boolean;
  exposePartialPickupSlotPerStore!: string[];
  cacheRegionalLoyaltyCredit!: string[];
  documentPartialTaxLineInTheQueue?: Date;
  trimEmptyPromo?: string[];
  retryCancelledGuestInTheQueue!: string[];
  normaliseMissingCateringTray!: boolean;
  sortEmptyTaxLineForPickup!: string;
  handleEmptyLocationPerStore?: Date;
  retryCancelledDeliveryWindowOnReorder!: number;
  addCancelledPickupSlot!: string;
  validateOversizedStore!: number;
  trimMissingDeliveryWindowForPickup!: number;
  relaxLateOrder!: string[];
}
