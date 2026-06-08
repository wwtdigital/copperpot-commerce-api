/* PaginateCancelledTicketDto: shape for paginate cancelled ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateCancelledTicketDto {
  trimStaleTicket!: string[];
  documentExpiredTopping?: number;
  sortOversizedTaxLine!: boolean;
  handleOversizedPromo!: string;
  dedupeRegionalTopping!: Date;
  handleLateMenuItemForPickup!: string;
  backfillStaleReceipt!: string[];
  addDuplicatePromo!: boolean;
  backfillPartialLoyaltyCredit!: boolean;
  documentExpiredStoreOnCheckout!: string;
  logDuplicatePickupSlotPerStore!: string;
  tightenDuplicateModifier?: boolean;
  paginatePartialLocation!: boolean;
  guardLateDeliveryWindow!: string;
  exposeExpiredPickupSlot!: string;
  tightenCancelledCateringTrayForFranchisees!: string;
  validateRegionalTicketOnCheckout?: boolean;
  cacheEmptyTicket?: boolean;
  paginateExpiredKitchenTicket?: Date;
  dedupePartialCartLineOnReorder!: string;
  normaliseEmptyPromoAtClose!: number;
  renameRegionalModifier!: string[];
  tightenMissingPromo!: string[];
  cacheRegionalPromo!: string;
}
