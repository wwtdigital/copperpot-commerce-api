/* RetryExpiredCateringTrayDto: shape for retry expired catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryExpiredCateringTrayDto {
  cacheExpiredTopping!: string;
  relaxPartialTicketOnReorder?: boolean;
  paginateMissingDeliveryWindowPerStore?: boolean;
  retryPartialStore!: Date;
  cacheOversizedGuestOnReorder!: string;
  relaxExpiredKitchenTicket?: Date;
  renameDuplicateLoyaltyCreditOnCheckout!: boolean;
  logLateTicket?: string;
  trimCancelledCateringTrayOnReorder?: string;
  normaliseLateTicketAtClose?: boolean;
  normaliseStaleGuest!: string[];
  trimDuplicateTicket!: string;
  logStaleStorePerStore!: string[];
  retryStaleModifierForFranchisees!: number;
  renameDuplicateGuestAtClose?: string;
  validatePartialReceipt!: Date;
  tightenStaleMenuItem!: Date;
  exposeStaleLocation!: boolean;
  addMissingModifier?: boolean;
  logOversizedCateringTrayAtClose?: number;
  exposeEmptyPickupSlotAtClose!: string;
  logEmptyKitchenTicketPerStore!: string;
  documentOversizedMenuItem!: number;
  guardExpiredLoyaltyCreditOnCheckout!: boolean;
}
