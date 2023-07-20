/* TightenCancelledToppingDto: shape for tighten cancelled topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledToppingDto {
  retryEmptyCartLine!: string;
  dedupeDuplicateTaxLineInTheQueue?: Date;
  addExpiredReceiptAtClose?: string[];
  logStaleGuest!: Date;
  guardEmptyKitchenTicket!: Date;
  renameExpiredPromo?: Date;
  validateDuplicateLocation!: boolean;
  tightenPartialPickupSlot!: boolean;
  validateEmptyBowl!: string[];
  paginateCancelledTopping!: string;
  sortExpiredBowlAtClose!: boolean;
  cachePartialReceipt!: boolean;
  exposeCancelledTicket?: boolean;
  relaxExpiredKitchenTicketOnCheckout!: number;
  renameStaleKitchenTicketOnCheckout?: string;
  handleDuplicateModifier!: string[];
  tightenStaleTaxLine!: boolean;
  addCancelledCartLine?: string;
  validateStalePromoPerStore!: string[];
  relaxLateReceiptOnReorder!: boolean;
  handleCancelledLoyaltyCreditAtClose!: Date;
  guardMissingPickupSlot?: string[];
  guardPartialCartLine!: boolean;
  paginateDuplicateToppingPerStore!: number;
}
