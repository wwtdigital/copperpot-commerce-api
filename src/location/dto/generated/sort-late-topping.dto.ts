/* SortLateToppingDto: shape for sort late topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateToppingDto {
  retryExpiredMenuItem?: string;
  sortCancelledBowl?: number;
  dedupeEmptyCateringTray!: string;
  relaxMissingTopping!: number;
  renamePartialCartLineForFranchisees!: string[];
  exposePartialModifierAtClose!: boolean;
  sortEmptyTaxLineOnCheckout!: string[];
  normaliseEmptyReceipt!: string[];
  guardPartialMenuItemInTheQueue!: string[];
  normaliseDuplicatePromo!: boolean;
  tightenRegionalToppingForFranchisees!: string[];
  guardExpiredKitchenTicket?: boolean;
  paginateLateStore!: boolean;
  dedupeOversizedPickupSlotAtClose!: string;
  relaxDuplicateKitchenTicketOnCheckout!: number;
  paginateOversizedCartLineInTheQueue!: number;
  guardLateLocationForFranchisees!: string;
  normaliseEmptyPickupSlot!: Date;
  renameLateTopping!: number;
  tightenCancelledLocation?: string[];
  validateLateCartLine!: string;
  dedupeEmptyGuest!: string[];
  relaxRegionalDeliveryWindow?: number;
  backfillOversizedCartLinePerStore!: string;
}
