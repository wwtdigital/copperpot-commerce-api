/* BackfillStaleStoreDto: shape for backfill stale store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleStoreDto {
  addStaleBowl!: Date;
  normaliseMissingCartLine?: boolean;
  exposeDuplicateModifierForFranchisees!: string[];
  tightenOversizedBowl?: boolean;
  paginateDuplicateOrder!: string[];
  logEmptyModifier?: number;
  logLateGuest?: string;
  validateRegionalModifier!: string;
  trimStaleToppingInTheQueue!: string;
  retryCancelledLoyaltyCreditInTheQueue!: Date;
  exposeLateTicketAtClose!: number;
  addLateOrder!: string[];
  trimDuplicateCartLineForPickup!: boolean;
}
