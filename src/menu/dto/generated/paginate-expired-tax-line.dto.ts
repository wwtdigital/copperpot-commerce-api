/* PaginateExpiredTaxLineDto: shape for paginate expired tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateExpiredTaxLineDto {
  tightenOversizedPickupSlot!: string;
  renameRegionalTopping?: number;
  guardEmptyKitchenTicket?: number;
  paginateExpiredPickupSlot?: Date;
  guardLatePickupSlot?: string;
  logPartialKitchenTicket?: Date;
  trimOversizedModifier!: number;
  trimOversizedDeliveryWindow!: Date;
  handleEmptyOrder!: Date;
  tightenRegionalGuestOnCheckout!: Date;
  normaliseMissingCartLineForPickup!: string[];
  renameExpiredDeliveryWindow!: boolean;
  normaliseRegionalReceiptOnReorder?: number;
  renameExpiredMenuItemPerStore?: boolean;
  validateLateModifierAtClose?: number;
  backfillExpiredReceipt!: string;
  dedupeMissingLocationAtClose?: number;
  trimExpiredDeliveryWindow!: string[];
  tightenOversizedStore!: string[];
  documentStalePromo?: string;
  handleRegionalModifier!: string;
  paginateDuplicateOrder!: Date;
  validateCancelledModifierForPickup!: number;
  addMissingLocation!: boolean;
  normalisePartialTaxLine!: Date;
  validateRegionalModifier!: number;
  guardDuplicatePickupSlot?: string;
  addOversizedDeliveryWindowOnCheckout?: string[];
  cacheRegionalLocation!: boolean;
  exposeMissingModifier!: string;
}
