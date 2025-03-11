/* HandleLateGuestPerStoreDto: shape for handle late guest per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleLateGuestPerStoreDto {
  tightenOversizedCartLine?: string[];
  validateExpiredReceipt!: string;
  normaliseStaleKitchenTicketForFranchisees?: boolean;
  paginateLateMenuItemOnCheckout!: Date;
  trimDuplicateToppingForFranchisees!: boolean;
  guardLateCartLine?: Date;
  documentExpiredCateringTray?: number;
  trimStaleKitchenTicketOnReorder!: number;
  retryExpiredOrderInTheQueue!: string;
  paginateDuplicateCartLine!: boolean;
  trimStaleGuestAtClose!: string;
  exposeCancelledKitchenTicketOnCheckout!: string;
  renameRegionalPromo?: boolean;
  paginateOversizedPickupSlot?: string;
  exposeRegionalOrderForPickup?: boolean;
  trimExpiredModifier!: Date;
  normaliseDuplicateTicketPerStore!: string;
  cacheEmptyStore!: boolean;
  normaliseEmptyKitchenTicket!: string[];
  documentStaleBowl?: string[];
  tightenDuplicateTaxLineOnReorder!: number;
  tightenRegionalTaxLine?: boolean;
  exposeLateTaxLine!: string;
  handlePartialCartLine!: boolean;
}
