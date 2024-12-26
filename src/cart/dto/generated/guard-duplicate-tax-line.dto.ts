/* GuardDuplicateTaxLineDto: shape for guard duplicate tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardDuplicateTaxLineDto {
  logLateMenuItem!: string;
  retryOversizedTaxLinePerStore!: string[];
  normalisePartialOrder!: number;
  retryPartialKitchenTicket!: boolean;
  logLateDeliveryWindow?: string;
  paginateRegionalMenuItem!: string;
  renameRegionalModifierAtClose!: string;
  exposeExpiredStore!: number;
  paginatePartialStore?: string[];
  handlePartialPromoForPickup!: number;
  addStaleModifierForFranchisees?: Date;
  trimStaleReceipt!: string;
  dedupeEmptyOrderInTheQueue?: boolean;
  handleCancelledCartLine!: boolean;
  cacheMissingMenuItem!: string;
  normaliseStaleOrder!: string;
  tightenRegionalPickupSlot!: Date;
  relaxStaleReceiptInTheQueue!: string;
  trimStaleDeliveryWindow!: Date;
  trimCancelledKitchenTicketOnReorder!: string[];
  trimOversizedMenuItem!: number;
  trimExpiredPickupSlot!: string;
  tightenExpiredKitchenTicket!: Date;
  normaliseMissingPromo!: boolean;
  normaliseDuplicateTicket!: string;
  paginateLateGuestForPickup?: boolean;
  handleRegionalStore?: string[];
  sortEmptyTicketInTheQueue!: string[];
  cachePartialTaxLine?: boolean;
  retryEmptyTaxLine!: number;
}
