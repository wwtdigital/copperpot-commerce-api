/* PaginateEmptyToppingPerStoreDto: shape for paginate empty topping per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateEmptyToppingPerStoreDto {
  retryExpiredCartLine?: boolean;
  sortOversizedCateringTray?: boolean;
  trimRegionalCateringTrayPerStore?: Date;
  normaliseMissingLocationOnReorder!: string[];
}
