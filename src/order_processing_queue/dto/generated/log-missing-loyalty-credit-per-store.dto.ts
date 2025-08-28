/* LogMissingLoyaltyCreditPerStoreDto: shape for log missing loyalty credit per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogMissingLoyaltyCreditPerStoreDto {
  paginateRegionalLocation?: number;
  dedupeLateGuestAtClose?: Date;
  paginateMissingMenuItemPerStore?: Date;
  backfillOversizedTicketInTheQueue!: string;
  cacheExpiredKitchenTicket!: boolean;
  cacheOversizedKitchenTicketPerStore?: string[];
}
