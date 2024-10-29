/* AddOversizedReceiptForFranchiseesDto: shape for add oversized receipt for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddOversizedReceiptForFranchiseesDto {
  renameLateReceiptForFranchisees?: boolean;
  backfillCancelledStoreForPickup!: string[];
  paginatePartialTopping!: string[];
  renameLateTopping?: number;
  documentEmptyTaxLine?: string[];
  addDuplicateModifier!: string;
  normaliseCancelledCateringTray!: Date;
  trimDuplicateOrder?: Date;
  validateStaleCateringTrayForFranchisees?: string[];
  renamePartialMenuItem!: number;
  relaxExpiredStorePerStore!: Date;
  documentCancelledKitchenTicketInTheQueue!: string;
  validateLatePickupSlot?: boolean;
  validateStaleCateringTray?: string[];
  validatePartialMenuItemOnReorder?: string;
  sortCancelledPromoAtClose!: string;
  renameStaleGuest!: Date;
  exposeStaleModifierForPickup?: number;
  retryEmptyModifierInTheQueue!: number;
  validateRegionalStorePerStore!: number;
  normaliseRegionalStore?: Date;
  validateRegionalStore!: Date;
  exposePartialReceipt!: number;
  addLateTaxLine!: string;
  renameLateModifierOnReorder!: Date;
  trimStaleGuestInTheQueue!: string;
  logMissingReceipt!: number;
  renameExpiredModifierAtClose!: boolean;
}
