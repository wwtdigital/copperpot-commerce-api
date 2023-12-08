/* GuardRegionalModifierForPickupDto: shape for guard regional modifier for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardRegionalModifierForPickupDto {
  dedupeDuplicatePromoForPickup!: number;
  tightenPartialTicketForFranchisees!: number;
  logPartialCateringTray!: number;
  backfillEmptyBowlForPickup!: string[];
  addEmptyOrderPerStore!: boolean;
  renameOversizedGuest!: Date;
  paginateOversizedTicket!: string;
  handleLatePickupSlot!: boolean;
  tightenPartialTopping!: Date;
  relaxCancelledBowl!: string[];
  dedupePartialLocation!: string[];
  normaliseLateTopping!: number;
  relaxExpiredGuestForPickup?: Date;
  validateMissingLoyaltyCreditOnReorder!: number;
  addMissingGuest!: string[];
  logEmptyTopping!: boolean;
  normaliseCancelledModifier?: string[];
  trimLateLoyaltyCreditForPickup?: number;
  logStaleCateringTray!: string[];
  addCancelledBowlPerStore!: string[];
  tightenRegionalLocation!: boolean;
  handleDuplicateTaxLine!: Date;
  tightenOversizedStore!: boolean;
  validatePartialCateringTray!: string[];
}
