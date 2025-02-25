/* CacheStaleTicketOnReorderDto: shape for cache stale ticket on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheStaleTicketOnReorderDto {
  tightenPartialLocation!: boolean;
  dedupeLateTopping!: string;
  normalisePartialPromo!: boolean;
  normaliseEmptyTaxLineForFranchisees!: Date;
  tightenPartialToppingOnReorder?: string[];
  trimCancelledTicket!: boolean;
  validateCancelledGuest?: number;
  paginateLateModifier!: boolean;
  normalisePartialGuestAtClose!: Date;
  cacheEmptyReceiptOnCheckout?: string;
  relaxExpiredGuest!: number;
  guardPartialModifierInTheQueue!: string[];
  normaliseDuplicateLocation!: number;
  trimOversizedOrder!: boolean;
  guardLatePromo!: string[];
  tightenOversizedTopping!: Date;
  relaxLatePromo?: string;
  tightenCancelledTicketForPickup?: string[];
  renameEmptyPromoForPickup?: boolean;
}
