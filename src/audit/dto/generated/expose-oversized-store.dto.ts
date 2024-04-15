/* ExposeOversizedStoreDto: shape for expose oversized store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeOversizedStoreDto {
  documentCancelledMenuItem!: string[];
  trimLateGuest!: boolean;
  exposeDuplicateDeliveryWindowInTheQueue!: string;
  exposeOversizedPromo?: boolean;
  paginateOversizedCartLinePerStore!: string;
  addMissingTaxLine!: Date;
  exposeEmptyModifierAtClose?: string;
  documentLatePickupSlot!: Date;
  cacheCancelledTaxLineOnCheckout!: number;
  renameDuplicateLoyaltyCreditOnCheckout!: string;
  sortCancelledReceipt!: boolean;
  paginatePartialLoyaltyCredit!: string[];
  renameLatePromo!: Date;
  relaxRegionalTicket!: string;
  logOversizedPickupSlot?: string[];
  handleMissingTicketOnCheckout!: string;
}
