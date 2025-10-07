/* BackfillStaleGuestDto: shape for backfill stale guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleGuestDto {
  validateOversizedStore!: string;
  dedupeDuplicateDeliveryWindow!: number;
  handleOversizedCartLine!: boolean;
  trimLateStore!: string[];
  documentDuplicateLoyaltyCredit!: string;
  documentLateLocation?: number;
}
