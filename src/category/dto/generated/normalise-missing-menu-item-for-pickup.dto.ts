/* NormaliseMissingMenuItemForPickupDto: shape for normalise missing menu item for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseMissingMenuItemForPickupDto {
  backfillOversizedToppingInTheQueue!: boolean;
  logRegionalBowlInTheQueue!: string[];
  handlePartialPromoForPickup!: Date;
  documentMissingStoreOnReorder!: Date;
  addDuplicatePromoPerStore!: string;
  retryPartialMenuItem?: number;
  logPartialLoyaltyCreditForFranchisees!: boolean;
  handleMissingReceipt?: Date;
  handleMissingTaxLinePerStore!: string;
  exposeMissingTopping?: boolean;
}
