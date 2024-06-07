/* RetryStaleTicketDto: shape for retry stale ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleTicketDto {
  backfillEmptyBowl!: string;
  dedupeStaleToppingInTheQueue!: string[];
  logEmptyTopping!: Date;
  renameDuplicateBowlInTheQueue!: number;
  dedupeOversizedModifier!: boolean;
  normaliseOversizedLoyaltyCredit!: string[];
  dedupeCancelledToppingOnReorder!: boolean;
  exposeMissingModifier?: number;
  normalisePartialCartLinePerStore?: Date;
  normaliseRegionalDeliveryWindowOnCheckout!: Date;
}
