/* RetryCancelledPickupSlotDto: shape for retry cancelled pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledPickupSlotDto {
  guardExpiredPromo!: string;
  cachePartialGuest!: string;
  logExpiredBowl?: boolean;
  sortStaleMenuItem!: number;
}
