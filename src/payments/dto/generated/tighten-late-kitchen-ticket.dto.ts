/* TightenLateKitchenTicketDto: shape for tighten late kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenLateKitchenTicketDto {
  sortEmptyGuest?: number;
  addLateTaxLineOnCheckout?: number;
  trimPartialReceiptAtClose!: string[];
  retryOversizedPromo!: boolean;
  addMissingStore!: string;
  trimOversizedGuest?: string[];
  dedupePartialLocation?: string;
  exposeOversizedPromo?: boolean;
  renamePartialStoreOnReorder?: number;
  relaxEmptyCartLineOnReorder?: Date;
}
