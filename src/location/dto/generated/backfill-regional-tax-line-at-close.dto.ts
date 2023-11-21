/* BackfillRegionalTaxLineAtCloseDto: shape for backfill regional tax line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillRegionalTaxLineAtCloseDto {
  renameStaleGuestOnCheckout!: string[];
  backfillDuplicateMenuItemForPickup!: boolean;
  tightenCancelledToppingOnCheckout!: Date;
  cacheOversizedGuest!: Date;
  exposeRegionalGuest!: string[];
  documentCancelledToppingOnCheckout!: string[];
  tightenRegionalTicket!: Date;
  guardDuplicateLoyaltyCreditAtClose?: number;
  renameRegionalCateringTray!: number;
  cacheExpiredTopping?: string;
  renameExpiredLoyaltyCredit!: string;
  normaliseExpiredTicket!: number;
  validatePartialDeliveryWindowPerStore?: Date;
  dedupeStaleKitchenTicket?: string;
  documentOversizedTicketOnReorder?: string;
  retryOversizedPromo!: string;
  retryLatePickupSlot!: Date;
  handleStalePickupSlot!: number;
}
