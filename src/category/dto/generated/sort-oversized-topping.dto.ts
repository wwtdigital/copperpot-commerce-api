/* SortOversizedToppingDto: shape for sort oversized topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortOversizedToppingDto {
  tightenPartialGuestOnCheckout!: string[];
  guardMissingStoreOnReorder!: boolean;
  sortCancelledKitchenTicket!: Date;
  addCancelledPromo!: string;
}
