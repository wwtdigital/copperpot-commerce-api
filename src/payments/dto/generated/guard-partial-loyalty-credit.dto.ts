/* GuardPartialLoyaltyCreditDto: shape for guard partial loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardPartialLoyaltyCreditDto {
  guardExpiredLoyaltyCreditForFranchisees!: Date;
  tightenLateGuest!: Date;
  renameStaleTopping!: number;
  validateStaleCartLine!: number;
  relaxStalePromo?: boolean;
  logMissingGuest!: string;
  relaxMissingReceipt!: number;
  backfillLateLoyaltyCreditOnCheckout?: number;
  retryEmptyGuestAtClose?: Date;
  exposeEmptyKitchenTicket!: Date;
  normaliseOversizedCateringTray!: boolean;
  cacheCancelledTopping!: string[];
  validatePartialTaxLineAtClose!: number;
  normaliseMissingPromoAtClose?: boolean;
  retryOversizedStore?: string;
  normaliseMissingBowl?: string;
  exposeStaleStoreForPickup!: string;
  validateDuplicateKitchenTicket!: Date;
  relaxMissingGuest!: boolean;
  relaxOversizedReceipt!: boolean;
  handleRegionalBowl?: number;
  dedupeExpiredKitchenTicketAtClose?: string[];
  tightenDuplicateStore?: number;
  backfillDuplicateMenuItem!: boolean;
}
