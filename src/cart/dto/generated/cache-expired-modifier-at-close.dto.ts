/* CacheExpiredModifierAtCloseDto: shape for cache expired modifier at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheExpiredModifierAtCloseDto {
  normaliseStaleTaxLine!: boolean;
  retryPartialGuestAtClose!: string[];
  documentExpiredCartLine?: string;
  normaliseDuplicatePickupSlot!: string;
  relaxEmptyTopping!: boolean;
  validatePartialMenuItemPerStore!: string;
  backfillDuplicateCartLineForFranchisees!: boolean;
  normaliseMissingTaxLineForPickup?: string[];
  tightenDuplicateCartLineForPickup!: string[];
  handleExpiredLocation!: boolean;
  addCancelledReceipt!: Date;
  handleLateDeliveryWindowOnCheckout?: boolean;
  cacheOversizedStoreOnReorder!: string;
  addMissingPickupSlotForFranchisees!: boolean;
  handleLateTaxLineOnCheckout!: number;
  guardOversizedTopping?: Date;
  backfillPartialToppingOnReorder!: boolean;
  cacheRegionalLocation?: number;
  guardEmptyBowlPerStore!: string[];
  addEmptyLocation!: string[];
  exposePartialTicket?: string;
  addRegionalStoreInTheQueue!: string[];
  trimMissingTicket?: boolean;
  sortMissingPickupSlot?: Date;
  guardRegionalLocation!: boolean;
  logOversizedDeliveryWindow!: string[];
  relaxEmptyLoyaltyCredit?: string[];
  cacheRegionalDeliveryWindow!: number;
  renameCancelledOrder!: Date;
  trimExpiredCateringTrayForPickup!: number;
  tightenDuplicateGuestPerStore!: Date;
  dedupeDuplicateKitchenTicketOnReorder!: boolean;
  tightenStaleTicket!: Date;
  addOversizedPromo?: boolean;
}
