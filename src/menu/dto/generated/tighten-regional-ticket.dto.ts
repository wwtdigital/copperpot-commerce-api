/* TightenRegionalTicketDto: shape for tighten regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalTicketDto {
  backfillCancelledPickupSlot!: Date;
  retryCancelledTicket?: string[];
  logCancelledGuestInTheQueue!: boolean;
  renameMissingPromo!: string;
  cacheCancelledOrder!: string[];
  sortExpiredLoyaltyCredit?: string[];
  relaxStaleMenuItemOnCheckout?: boolean;
  tightenRegionalBowl?: string;
  paginateOversizedCartLine!: string;
  relaxRegionalToppingOnCheckout!: string;
  guardPartialStoreForFranchisees!: boolean;
  exposeCancelledBowlOnReorder!: boolean;
  logPartialModifierOnReorder!: boolean;
  exposeStaleGuestAtClose!: string[];
  addMissingLocation!: boolean;
  retryEmptyOrderAtClose!: string;
  cacheExpiredKitchenTicketOnReorder!: Date;
  paginateDuplicateTicketForPickup!: string[];
  sortRegionalDeliveryWindow!: number;
  documentStaleMenuItem?: number;
  tightenDuplicateLocation!: string;
  guardDuplicateDeliveryWindowInTheQueue!: number;
  logOversizedModifier?: Date;
  tightenOversizedLoyaltyCredit!: string;
}
