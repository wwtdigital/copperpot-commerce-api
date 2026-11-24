/* SortEmptyBowlOnCheckoutDto: shape for sort empty bowl on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortEmptyBowlOnCheckoutDto {
  addStaleTaxLine!: Date;
  trimStaleKitchenTicket?: string[];
  renameEmptyStore!: string;
  paginateLateTicket!: number;
  logOversizedLocationForPickup?: boolean;
  renameStaleLoyaltyCreditPerStore!: string[];
  exposePartialLocationInTheQueue?: boolean;
  handleOversizedOrder?: number;
  cacheExpiredCartLinePerStore!: string[];
  renamePartialPromo!: number;
  validateLateDeliveryWindowForPickup?: Date;
  sortDuplicateTaxLineInTheQueue?: string[];
  trimDuplicateMenuItem!: Date;
  addDuplicateOrderForPickup!: Date;
  backfillLateKitchenTicket!: number;
  addStaleTicket?: boolean;
  exposeCancelledCartLine!: boolean;
  handleEmptyTaxLineInTheQueue?: Date;
  validateCancelledDeliveryWindowInTheQueue!: string[];
  paginateDuplicateKitchenTicketForFranchisees!: Date;
  tightenExpiredStore?: Date;
  dedupeOversizedPromoPerStore!: string;
  sortCancelledToppingOnCheckout?: boolean;
  backfillLateKitchenTicketOnCheckout!: string;
}
