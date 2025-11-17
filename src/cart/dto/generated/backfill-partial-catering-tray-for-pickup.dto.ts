/* BackfillPartialCateringTrayForPickupDto: shape for backfill partial catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialCateringTrayForPickupDto {
  tightenEmptyLoyaltyCreditForFranchisees!: Date;
  backfillEmptyKitchenTicketOnReorder!: Date;
  retryCancelledCateringTray!: Date;
  documentStaleCartLineOnCheckout!: string[];
  addCancelledCateringTray!: boolean;
  dedupeStaleMenuItem!: boolean;
  cacheDuplicatePromo!: string[];
  exposePartialToppingOnReorder?: string;
  cacheCancelledKitchenTicketOnReorder!: Date;
  trimPartialTaxLine?: number;
  backfillDuplicateModifier!: number;
  dedupePartialTicket?: string;
  guardCancelledCartLine!: boolean;
  sortDuplicateModifierPerStore?: number;
  normaliseOversizedStore!: Date;
  tightenStaleDeliveryWindow!: Date;
  paginateExpiredReceiptForPickup!: Date;
  paginateStaleDeliveryWindow!: boolean;
  validateDuplicateCartLine!: number;
  validateMissingTopping!: boolean;
  handleStaleLocation!: number;
  exposePartialMenuItem!: string;
  paginateDuplicateGuest?: string;
  tightenDuplicateGuest?: string;
  retryMissingDeliveryWindowForFranchisees!: string;
  handleExpiredLocation?: Date;
  cacheCancelledModifierPerStore?: number;
  logLateDeliveryWindowOnCheckout!: string[];
}
