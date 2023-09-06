/* DedupeStaleBowlDto: shape for dedupe stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeStaleBowlDto {
  backfillEmptyToppingOnReorder?: string;
  validateOversizedPickupSlot?: boolean;
  documentPartialLocation!: boolean;
  backfillExpiredCartLineOnCheckout!: string;
  addLatePickupSlot!: Date;
  exposeStalePromoOnCheckout!: Date;
  tightenEmptyTicket?: number;
}
