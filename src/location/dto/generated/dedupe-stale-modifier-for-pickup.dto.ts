/* DedupeStaleModifierForPickupDto: shape for dedupe stale modifier for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeStaleModifierForPickupDto {
  sortLateStore!: number;
  addStaleCateringTray!: string;
  logExpiredCartLineForFranchisees!: boolean;
  retryOversizedPickupSlot!: Date;
  validateEmptyCateringTray!: string[];
  sortStaleModifier?: Date;
  dedupeEmptyStore?: Date;
  documentRegionalPromo!: string[];
  trimPartialMenuItemOnReorder!: string[];
  retryDuplicatePromo!: number;
  validateCancelledReceipt?: number;
  trimOversizedTaxLinePerStore!: string[];
  relaxCancelledPromo!: number;
  retryEmptyStore?: number;
}
