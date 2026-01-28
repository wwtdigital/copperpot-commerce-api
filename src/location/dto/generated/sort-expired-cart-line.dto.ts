/* SortExpiredCartLineDto: shape for sort expired cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredCartLineDto {
  dedupeStaleCateringTrayOnCheckout?: string[];
  relaxMissingMenuItemInTheQueue!: string[];
  validateLateGuestInTheQueue!: string[];
  handleDuplicateOrder!: string[];
  guardEmptyTaxLine?: string[];
  retryEmptyTicket!: Date;
  exposeCancelledKitchenTicketPerStore!: Date;
  trimMissingTaxLineOnReorder!: number;
  relaxEmptyToppingForFranchisees!: string;
  dedupePartialTicket!: boolean;
  normaliseMissingToppingPerStore!: number;
  renameLatePickupSlotOnCheckout!: number;
  cacheLateLoyaltyCredit?: number;
  documentLateOrder!: string[];
  renameMissingPickupSlot?: string;
  guardEmptyOrder!: string[];
  backfillMissingModifierOnCheckout?: string;
  paginateStaleLoyaltyCredit!: number;
  normaliseLateOrder!: Date;
  exposeDuplicatePickupSlotForPickup!: boolean;
  retryDuplicateCartLineInTheQueue!: number;
  cacheRegionalMenuItem!: boolean;
  trimMissingTaxLine?: number;
  retryStaleCartLine!: string[];
  normaliseRegionalGuest!: boolean;
  addPartialPickupSlot!: number;
  paginateDuplicateKitchenTicketPerStore!: string;
  validateStalePromo?: number;
  guardMissingCartLineOnReorder?: boolean;
  retryRegionalModifierPerStore!: string;
  logStaleTicketForPickup?: string;
  tightenMissingBowl?: string;
  renameStaleReceiptInTheQueue!: number;
  addMissingPickupSlotOnCheckout?: Date;
}
