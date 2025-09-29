/* AddPartialPickupSlotForFranchiseesDto: shape for add partial pickup slot for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddPartialPickupSlotForFranchiseesDto {
  backfillDuplicateTicketForFranchisees!: number;
  backfillMissingReceipt?: string[];
  paginateEmptyBowl!: boolean;
  paginateCancelledOrder!: string[];
  addOversizedToppingAtClose!: Date;
  documentPartialPromo!: number;
  renameOversizedKitchenTicketOnReorder!: Date;
  tightenCancelledModifier?: string[];
  validateDuplicateReceiptAtClose?: Date;
  guardCancelledLocation?: string;
  renameRegionalKitchenTicket?: boolean;
  tightenDuplicateCartLine?: boolean;
  addMissingTopping?: boolean;
  normaliseLateLocation?: boolean;
  logPartialPickupSlot!: string[];
  cacheEmptyTicketForPickup?: string[];
  tightenPartialBowlOnReorder!: string;
  sortDuplicateReceipt?: number;
  exposeMissingBowlAtClose?: boolean;
  trimEmptyCartLine!: number;
  normaliseStaleOrder?: Date;
  normalisePartialLoyaltyCredit!: boolean;
  validatePartialTaxLineAtClose!: string;
  validateDuplicateToppingOnReorder!: Date;
}
