/* TightenExpiredOrderOnCheckoutDto: shape for tighten expired order on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredOrderOnCheckoutDto {
  guardEmptyDeliveryWindowOnReorder!: Date;
  renameStaleDeliveryWindow!: number;
  paginateStaleDeliveryWindow!: string[];
  backfillRegionalTicketOnCheckout!: boolean;
  paginateMissingLocationInTheQueue!: string;
  sortExpiredBowl!: number;
}
