/* TrimExpiredGuestDto: shape for trim expired guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimExpiredGuestDto {
  handleLateTopping!: boolean;
  backfillCancelledCartLine?: string;
  validateCancelledTaxLine?: Date;
  guardRegionalBowlAtClose!: boolean;
  handleMissingCateringTray?: boolean;
  logMissingTopping!: number;
  guardRegionalModifierInTheQueue!: Date;
  trimStaleCateringTray!: string;
}
