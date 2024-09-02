/* RenameDuplicateReceiptDto: shape for rename duplicate receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameDuplicateReceiptDto {
  normaliseExpiredCartLine!: string;
  renameCancelledTaxLineOnReorder!: string[];
  cacheRegionalMenuItemAtClose!: number;
  backfillMissingTaxLine!: boolean;
  logLateStore!: number;
  documentPartialPickupSlot!: number;
  tightenStaleStore?: string[];
  guardCancelledCartLine!: boolean;
  dedupePartialGuestForPickup!: boolean;
  exposeMissingCateringTray!: boolean;
  cacheExpiredDeliveryWindow!: string;
  paginateCancelledPickupSlot!: string[];
  trimExpiredTicketAtClose!: string;
  tightenOversizedCartLine!: string;
  exposeCancelledModifier?: string[];
  validateExpiredGuest!: boolean;
  normaliseEmptyOrder!: string;
  logOversizedKitchenTicketForPickup!: Date;
  validateCancelledKitchenTicket!: Date;
  backfillExpiredLocationOnReorder!: number;
  relaxExpiredCateringTrayForFranchisees!: number;
  paginatePartialTopping?: number;
  sortMissingPromo!: Date;
  validateOversizedModifier!: number;
  documentExpiredPromo?: number;
  addExpiredReceipt!: number;
}
