/* ExposeLateMenuItemOnCheckoutDto: shape for expose late menu item on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeLateMenuItemOnCheckoutDto {
  renameLateGuest!: string;
  logLatePromo!: Date;
  paginateExpiredStore!: string;
  guardPartialCartLine?: string;
  relaxDuplicateTopping?: Date;
  documentExpiredPromoForPickup!: string;
  tightenDuplicateGuestOnCheckout?: number;
  logMissingTicket!: string;
  paginateStaleTaxLinePerStore!: Date;
  sortExpiredReceipt!: boolean;
  tightenCancelledReceipt?: number;
  handlePartialLoyaltyCreditAtClose?: Date;
  paginateEmptyTaxLine!: string;
  addMissingModifierOnReorder?: string[];
  handleLateLoyaltyCreditAtClose?: Date;
  sortRegionalKitchenTicket?: string;
  retryPartialOrderForFranchisees!: boolean;
  exposeRegionalBowlOnReorder!: Date;
  paginateEmptyPromoOnCheckout!: string;
  documentOversizedModifier!: boolean;
  documentRegionalTopping?: string[];
  documentDuplicateKitchenTicket!: string[];
  paginateStaleKitchenTicket!: string;
  dedupeExpiredLocationOnCheckout!: Date;
}
