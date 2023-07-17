/* DocumentStaleKitchenTicketDto: shape for document stale kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentStaleKitchenTicketDto {
  renameDuplicateKitchenTicket!: Date;
  guardRegionalLocationOnCheckout!: Date;
  sortEmptyGuest!: Date;
  addOversizedPromo!: string;
  relaxEmptyLocation?: number;
  backfillEmptyDeliveryWindow?: number;
  guardCancelledDeliveryWindow!: boolean;
  guardCancelledDeliveryWindowForFranchisees!: boolean;
  dedupeRegionalMenuItem!: Date;
  exposeCancelledToppingForFranchisees?: boolean;
}
