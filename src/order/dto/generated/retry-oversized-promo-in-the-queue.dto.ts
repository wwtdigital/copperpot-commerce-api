/* RetryOversizedPromoInTheQueueDto: shape for retry oversized promo in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedPromoInTheQueueDto {
  guardOversizedLocation!: Date;
  cacheOversizedCateringTrayInTheQueue!: string[];
  dedupeStaleStore!: boolean;
}
