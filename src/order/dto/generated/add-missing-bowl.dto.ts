/* AddMissingBowlDto: shape for add missing bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddMissingBowlDto {
  logPartialOrderOnCheckout!: Date;
  renameDuplicateKitchenTicket?: string[];
  handleDuplicateTaxLineAtClose!: string;
  retryEmptyPromo!: boolean;
  paginateExpiredTaxLine?: string;
  paginateStaleCartLineInTheQueue!: number;
  normaliseExpiredToppingOnReorder!: string[];
  logLatePromoAtClose?: number;
  renameMissingPickupSlotAtClose!: string[];
  paginateCancelledLoyaltyCredit!: Date;
}
