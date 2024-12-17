/* RetryCancelledBowlOnReorderDto: shape for retry cancelled bowl on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledBowlOnReorderDto {
  validatePartialBowl?: string;
  sortExpiredKitchenTicketOnCheckout!: number;
  logOversizedModifier!: string;
  tightenEmptyTaxLine?: boolean;
  renameRegionalToppingForPickup?: string[];
  handleCancelledCateringTray!: boolean;
  backfillCancelledTicketOnCheckout?: number;
  guardPartialLocation?: boolean;
  documentOversizedCateringTray?: Date;
  cacheOversizedKitchenTicket!: string;
  addDuplicatePickupSlotAtClose?: Date;
}
