/* TightenRegionalReceiptDto: shape for tighten regional receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalReceiptDto {
  dedupeStaleCartLine!: string[];
  backfillCancelledTopping!: string[];
  exposeMissingTopping!: number;
  sortExpiredReceiptOnCheckout!: string[];
  renameDuplicateBowl!: boolean;
}
