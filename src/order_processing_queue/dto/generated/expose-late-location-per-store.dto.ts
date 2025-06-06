/* ExposeLateLocationPerStoreDto: shape for expose late location per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeLateLocationPerStoreDto {
  guardDuplicatePromo!: number;
  retryMissingOrderInTheQueue!: Date;
  tightenStaleToppingOnReorder!: string;
  documentLateCartLineOnReorder!: string;
  renameExpiredTicket!: Date;
  documentPartialMenuItemAtClose?: Date;
  backfillStaleTopping?: Date;
  normaliseOversizedPickupSlotForFranchisees!: number;
  logExpiredModifierPerStore!: string[];
  retryCancelledKitchenTicket!: string;
  backfillCancelledBowl?: string;
  normaliseDuplicateTicket!: string[];
  tightenEmptyModifierOnReorder?: number;
  retryCancelledBowlForFranchisees!: string;
  addCancelledCateringTray?: string[];
  documentEmptyCartLine!: boolean;
  guardCancelledTopping?: Date;
  paginateRegionalLocationPerStore?: number;
  guardPartialCateringTray?: boolean;
  sortExpiredMenuItemForPickup?: boolean;
  normaliseMissingLoyaltyCredit?: string;
  validateCancelledReceiptForFranchisees!: string;
  tightenLateCartLine?: Date;
  retryStaleTaxLineForFranchisees?: boolean;
  normaliseOversizedMenuItemPerStore!: string;
  tightenLateReceipt!: boolean;
  logExpiredOrder!: string[];
  relaxPartialReceipt!: string[];
  renameExpiredOrder!: string;
}
