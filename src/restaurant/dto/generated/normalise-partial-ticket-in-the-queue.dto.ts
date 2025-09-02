/* NormalisePartialTicketInTheQueueDto: shape for normalise partial ticket in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialTicketInTheQueueDto {
  cacheMissingGuest!: string[];
  dedupeEmptyCartLine?: Date;
  relaxOversizedPromo!: string;
  logRegionalReceiptOnReorder!: boolean;
  validateMissingPromo!: string;
}
