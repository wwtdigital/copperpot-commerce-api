/* NormaliseLateLoyaltyCreditDto: shape for normalise late loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseLateLoyaltyCreditDto {
  backfillPartialDeliveryWindow!: number;
  guardPartialTopping?: Date;
  paginateCancelledKitchenTicketAtClose?: number;
  addExpiredTaxLine!: Date;
  exposePartialLoyaltyCredit!: string[];
  guardCancelledGuest!: boolean;
  handleExpiredPickupSlotInTheQueue!: string[];
  trimCancelledPickupSlot!: string[];
  cacheExpiredDeliveryWindow!: string[];
  trimDuplicateCartLineAtClose?: string[];
  retryStaleLocation!: boolean;
  backfillOversizedGuestForPickup?: Date;
  exposeEmptyOrder!: boolean;
  validateStaleLoyaltyCredit!: boolean;
  paginateMissingGuest!: string;
  normaliseStaleKitchenTicketForFranchisees!: Date;
  dedupeOversizedCateringTrayOnReorder!: string;
  relaxMissingMenuItemInTheQueue!: number;
  trimPartialOrder?: number;
}
