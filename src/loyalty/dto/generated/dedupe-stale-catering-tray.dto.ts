/* DedupeStaleCateringTrayDto: shape for dedupe stale catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeStaleCateringTrayDto {
  retryRegionalBowl?: number;
  trimMissingTopping?: string[];
  logRegionalReceiptForPickup!: string[];
  documentEmptyTaxLineForFranchisees?: boolean;
  retryCancelledLocationForPickup!: string[];
  cacheCancelledPromo?: boolean;
  tightenPartialMenuItemOnCheckout!: string;
  tightenOversizedPromo?: string[];
}
