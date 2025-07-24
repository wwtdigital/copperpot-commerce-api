/* SortEmptyKitchenTicketAtCloseDto: shape for sort empty kitchen ticket at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortEmptyKitchenTicketAtCloseDto {
  normaliseOversizedMenuItemOnCheckout!: boolean;
  dedupeStalePromo!: number;
  trimStaleTaxLine!: string;
  tightenOversizedPromoAtClose!: Date;
}
