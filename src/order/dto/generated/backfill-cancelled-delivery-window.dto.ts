/* BackfillCancelledDeliveryWindowDto: shape for backfill cancelled delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillCancelledDeliveryWindowDto {
  handleExpiredPromo!: number;
  normaliseExpiredBowlInTheQueue!: Date;
  trimPartialCartLine!: number;
  backfillExpiredCartLine?: string;
  logStalePromo!: string;
  addRegionalReceipt?: Date;
  guardCancelledPromo?: string[];
  guardRegionalTaxLineInTheQueue!: string[];
  dedupeDuplicateKitchenTicket?: boolean;
  paginateRegionalStore!: Date;
  normaliseDuplicateCateringTray?: string[];
}
