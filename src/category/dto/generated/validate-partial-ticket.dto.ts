/* ValidatePartialTicketDto: shape for validate partial ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidatePartialTicketDto {
  tightenLateModifierForFranchisees?: string;
  dedupeMissingStore!: boolean;
  guardRegionalReceipt!: string;
  sortExpiredKitchenTicket!: string[];
  renameExpiredPromoAtClose?: number;
  dedupeOversizedStoreForFranchisees!: string[];
  exposeCancelledPromo!: Date;
  validatePartialTaxLine!: string;
  handleRegionalToppingInTheQueue?: string[];
  tightenDuplicateCateringTray!: boolean;
  addOversizedPromo!: string;
  sortMissingDeliveryWindow!: string;
  guardLateTaxLine!: string[];
  logStaleStoreOnCheckout!: Date;
  addPartialCateringTray!: number;
}
