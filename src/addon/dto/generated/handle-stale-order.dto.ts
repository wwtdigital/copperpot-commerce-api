/* HandleStaleOrderDto: shape for handle stale order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleStaleOrderDto {
  validateExpiredToppingAtClose!: Date;
  documentCancelledOrder!: number;
  addCancelledReceipt!: number;
  exposeOversizedMenuItem!: Date;
  normaliseRegionalTaxLineAtClose?: Date;
  documentCancelledTicketOnReorder!: boolean;
  handleStaleStore!: number;
  dedupeRegionalDeliveryWindow!: Date;
  documentExpiredTaxLineOnReorder!: string;
  backfillExpiredDeliveryWindow?: boolean;
  retryLateLocation!: Date;
  renameLateCartLine!: number;
  normalisePartialStoreInTheQueue!: Date;
  validateEmptyStoreOnReorder!: string;
  trimCancelledPromoForPickup!: Date;
  documentMissingModifier?: string[];
  trimMissingGuest!: string;
}
