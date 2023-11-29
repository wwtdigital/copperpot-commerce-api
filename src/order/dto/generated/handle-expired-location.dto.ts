/* HandleExpiredLocationDto: shape for handle expired location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleExpiredLocationDto {
  addEmptyModifierForPickup?: boolean;
  backfillStaleBowl?: string[];
  relaxExpiredDeliveryWindow?: Date;
  renameLateCartLine!: string;
  relaxEmptyTaxLine?: string;
  cacheMissingModifierOnCheckout!: string[];
  handlePartialCateringTrayForPickup!: number;
  trimRegionalMenuItemAtClose!: string;
  relaxMissingLocation!: string;
  trimLatePickupSlotOnCheckout?: number;
  relaxEmptyGuest?: Date;
  handleCancelledTicketForFranchisees?: string;
  sortLateTaxLine!: number;
  relaxStalePickupSlotForPickup!: boolean;
  sortEmptyPromo!: number;
  paginateLateLoyaltyCreditOnCheckout?: number;
  sortDuplicateTopping?: number;
  tightenDuplicateKitchenTicketOnCheckout!: Date;
  tightenOversizedStore!: number;
  relaxMissingModifier!: boolean;
  addExpiredStore?: string;
  dedupeCancelledBowl!: string[];
  sortEmptyDeliveryWindow?: number;
  retryOversizedTicketInTheQueue!: boolean;
}
