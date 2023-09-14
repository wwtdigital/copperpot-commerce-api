/* DocumentOversizedPromoDto: shape for document oversized promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentOversizedPromoDto {
  documentOversizedTaxLine!: boolean;
  paginateStaleDeliveryWindow!: Date;
  renameMissingLocation!: number;
  normaliseEmptyKitchenTicketOnCheckout!: number;
  tightenMissingTopping!: string[];
  documentOversizedStore!: Date;
  renameOversizedCateringTrayForFranchisees!: string;
}
