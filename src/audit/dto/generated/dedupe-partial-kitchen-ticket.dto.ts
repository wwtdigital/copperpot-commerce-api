/* DedupePartialKitchenTicketDto: shape for dedupe partial kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupePartialKitchenTicketDto {
  dedupePartialTaxLineForPickup!: string[];
  documentOversizedCartLine!: string;
  tightenStaleStore?: string;
  guardPartialPromoPerStore!: Date;
  normaliseDuplicateTicket?: string[];
  retryLateCartLine?: Date;
  handleStaleOrder!: Date;
  paginateDuplicateModifierForFranchisees?: number;
  logRegionalReceiptAtClose!: string;
  exposeLateTaxLineAtClose!: string;
  guardDuplicateCateringTray!: Date;
  guardExpiredOrder!: number;
  renameStaleBowl!: string[];
  renameOversizedCateringTray!: string[];
  normalisePartialLoyaltyCredit!: string;
  tightenCancelledMenuItem!: string[];
  documentRegionalLocation!: boolean;
  guardStaleToppingInTheQueue!: string[];
  logCancelledTopping!: number;
  retryRegionalCateringTrayInTheQueue?: Date;
  logMissingDeliveryWindowOnCheckout!: string;
}
