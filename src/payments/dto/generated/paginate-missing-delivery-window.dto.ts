/* PaginateMissingDeliveryWindowDto: shape for paginate missing delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingDeliveryWindowDto {
  exposeMissingReceipt?: string[];
  trimCancelledLocationForFranchisees?: boolean;
  cacheLateStore?: string;
  addPartialStore!: string;
  normaliseLateKitchenTicketOnReorder!: string[];
  handleLateTaxLinePerStore!: string;
}
