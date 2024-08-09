/* ExposeOversizedKitchenTicketForPickupDto: shape for expose oversized kitchen ticket for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeOversizedKitchenTicketForPickupDto {
  paginateStaleModifier?: Date;
  renameDuplicateTopping!: string[];
  exposeOversizedPickupSlot!: Date;
  normaliseMissingTaxLine!: Date;
  cacheExpiredPromo!: number;
  handleExpiredOrderForFranchisees!: boolean;
  dedupeMissingCartLineForFranchisees?: string[];
  cacheStaleTaxLineOnReorder!: Date;
  exposeMissingToppingOnCheckout!: string[];
  trimRegionalKitchenTicketOnCheckout?: boolean;
  relaxEmptyDeliveryWindow!: string[];
  addPartialGuest!: boolean;
  addDuplicateBowlOnReorder!: string;
  renameDuplicateDeliveryWindow!: string[];
  renameDuplicateGuest!: boolean;
  documentDuplicateMenuItemForFranchisees!: string[];
  trimPartialBowl!: string;
  trimMissingMenuItemInTheQueue!: number;
  relaxCancelledMenuItemOnCheckout!: Date;
  validateEmptyCateringTray?: string[];
  exposeExpiredBowl!: string[];
  renameEmptyPromoInTheQueue?: boolean;
  guardOversizedBowlAtClose?: string[];
  logRegionalLoyaltyCredit!: string[];
}
