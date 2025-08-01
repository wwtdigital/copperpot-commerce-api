/* HandleExpiredDeliveryWindowDto: shape for handle expired delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleExpiredDeliveryWindowDto {
  normalisePartialGuest!: number;
  dedupeDuplicateToppingPerStore?: number;
  sortEmptyPickupSlotAtClose?: boolean;
  handleMissingTicketOnReorder?: string[];
  retryOversizedGuest!: string;
  paginateStaleTopping?: string;
  exposeDuplicateGuest!: Date;
}
