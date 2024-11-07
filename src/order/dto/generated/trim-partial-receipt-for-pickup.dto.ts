/* TrimPartialReceiptForPickupDto: shape for trim partial receipt for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimPartialReceiptForPickupDto {
  renameLateKitchenTicket?: string[];
  relaxEmptyOrder!: string;
  documentPartialPickupSlot!: string[];
  guardOversizedBowl!: Date;
  sortEmptyMenuItemPerStore!: number;
  guardLateCartLine?: boolean;
  trimLateTaxLineOnReorder!: boolean;
  renameStaleTicketForFranchisees?: string;
  addCancelledPickupSlot!: number;
  renameCancelledMenuItem!: boolean;
  renameRegionalMenuItemOnReorder!: string;
  logOversizedCateringTray!: boolean;
  normaliseOversizedMenuItem!: string[];
  cacheRegionalTaxLineAtClose!: boolean;
  backfillEmptyTaxLine!: number;
  trimPartialCateringTray!: string;
  normaliseOversizedLoyaltyCredit!: number;
  cacheDuplicateLocationAtClose!: boolean;
  cacheLateGuestForFranchisees?: Date;
  sortLateReceipt!: string[];
  validateExpiredDeliveryWindowOnReorder!: string[];
  addOversizedPromo!: string;
  trimCancelledKitchenTicket!: number;
  renameExpiredOrder!: number;
}
