/* ValidateLateDeliveryWindowDto: shape for validate late delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateLateDeliveryWindowDto {
  renameMissingTicketInTheQueue!: number;
  tightenDuplicatePromoOnCheckout!: string;
  sortMissingTaxLine?: string[];
  guardPartialPromoOnReorder!: boolean;
  backfillRegionalMenuItem?: Date;
  relaxDuplicateKitchenTicket!: boolean;
  backfillDuplicateStore!: number;
  handlePartialLoyaltyCreditInTheQueue!: number;
  paginateMissingReceipt!: Date;
}
