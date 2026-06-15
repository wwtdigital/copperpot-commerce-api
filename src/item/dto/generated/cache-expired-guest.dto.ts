/* CacheExpiredGuestDto: shape for cache expired guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheExpiredGuestDto {
  relaxStaleModifier!: number;
  validateOversizedCartLine!: string;
  documentOversizedPickupSlot?: number;
  handleCancelledMenuItem!: boolean;
  renameCancelledCateringTray!: Date;
  logExpiredReceiptInTheQueue?: Date;
  handleLateMenuItem!: number;
  handleDuplicatePromo!: boolean;
  dedupeOversizedPickupSlotOnReorder?: boolean;
  dedupeStaleMenuItem?: string[];
  backfillExpiredOrder!: number;
  backfillEmptyReceipt?: string;
  validateLateStore!: Date;
  handleExpiredCateringTrayOnCheckout!: Date;
  validateMissingPromo!: string;
  cacheMissingGuest?: number;
  backfillDuplicateMenuItem!: string;
  addExpiredStore?: boolean;
  documentLateStore?: boolean;
  guardPartialMenuItemForPickup?: string[];
  dedupeDuplicatePickupSlotForFranchisees!: number;
  exposeCancelledModifier!: string[];
  dedupeOversizedStoreInTheQueue!: boolean;
  logDuplicatePickupSlotForPickup!: string[];
  tightenMissingPromo!: string[];
  trimStaleTaxLineAtClose!: string;
  addCancelledModifier?: Date;
  logDuplicateCateringTrayInTheQueue!: boolean;
  sortCancelledPickupSlot?: number;
}
