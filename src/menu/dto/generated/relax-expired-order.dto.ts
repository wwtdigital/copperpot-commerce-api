/* RelaxExpiredOrderDto: shape for relax expired order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxExpiredOrderDto {
  tightenPartialBowlOnReorder!: Date;
  retryRegionalStore!: boolean;
  cacheMissingLocation!: boolean;
  guardEmptyGuestInTheQueue?: string;
  relaxEmptyModifier?: number;
  tightenExpiredOrderPerStore?: string;
  relaxOversizedCateringTrayPerStore!: string;
  tightenOversizedMenuItem!: Date;
  relaxRegionalDeliveryWindow!: string;
  paginatePartialLoyaltyCredit!: Date;
  dedupeRegionalLocation!: number;
  logDuplicateCartLine!: boolean;
  renameMissingBowlPerStore!: boolean;
}
