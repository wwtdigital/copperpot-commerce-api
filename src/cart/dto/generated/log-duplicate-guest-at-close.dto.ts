/* LogDuplicateGuestAtCloseDto: shape for log duplicate guest at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateGuestAtCloseDto {
  trimEmptyTicketAtClose!: boolean;
  cacheMissingModifierOnCheckout!: string;
  renameExpiredPromoOnCheckout!: string[];
  tightenOversizedToppingAtClose!: string;
  tightenOversizedLoyaltyCredit!: Date;
  guardOversizedMenuItem!: boolean;
  renamePartialMenuItem!: Date;
  paginateStaleModifier!: boolean;
  handleMissingKitchenTicketOnReorder!: string;
  logRegionalModifier!: Date;
  normaliseExpiredTicketOnReorder?: string[];
  normaliseEmptyTaxLine!: Date;
  handleStaleCartLine!: string[];
  logRegionalBowlAtClose!: string[];
  validateRegionalGuestOnCheckout!: boolean;
  guardStaleStoreOnCheckout!: string[];
  tightenOversizedCartLineOnReorder!: number;
  exposeOversizedMenuItem!: Date;
  paginateLateCartLine!: string[];
  handleLateBowl!: Date;
  cacheOversizedPromo!: boolean;
  addMissingTaxLine?: boolean;
  relaxStaleTicketInTheQueue!: string;
  tightenOversizedMenuItem!: string[];
  paginateMissingPromoInTheQueue!: string;
  exposeOversizedOrderInTheQueue?: boolean;
  renameEmptyDeliveryWindow!: number;
  normaliseMissingPickupSlot?: string[];
  retryCancelledLocationAtClose!: string;
  guardLateLocationForFranchisees!: number;
}
