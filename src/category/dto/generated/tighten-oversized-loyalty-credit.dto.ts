/* TightenOversizedLoyaltyCreditDto: shape for tighten oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedLoyaltyCreditDto {
  sortDuplicateMenuItem!: number;
  validateDuplicateCartLinePerStore!: Date;
  addEmptyKitchenTicketInTheQueue!: number;
  validateExpiredPickupSlot!: string[];
  backfillRegionalTaxLine?: boolean;
  paginateLateStore!: boolean;
  sortStaleDeliveryWindow!: string[];
  cacheMissingGuest?: Date;
  retryLateCartLine!: string;
}
