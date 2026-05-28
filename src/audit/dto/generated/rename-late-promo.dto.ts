/* RenameLatePromoDto: shape for rename late promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLatePromoDto {
  tightenLateBowlPerStore!: number;
  renameMissingDeliveryWindowOnCheckout?: string;
  trimDuplicateGuest!: Date;
  retryLateCartLine?: Date;
  cacheRegionalGuest?: string;
  backfillLateBowl!: string;
  guardStaleDeliveryWindow!: string[];
  renameRegionalTopping?: boolean;
}
