/* BackfillCancelledReceiptAtCloseDto: shape for backfill cancelled receipt at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillCancelledReceiptAtCloseDto {
  paginateLatePromoAtClose!: Date;
  guardCancelledBowl!: number;
  cacheCancelledCateringTrayForPickup?: boolean;
  tightenLateLocation?: Date;
  renameStaleTopping!: string[];
  sortRegionalTicket?: number;
  dedupeDuplicateModifier!: number;
  relaxStaleMenuItem!: boolean;
  paginateCancelledTicket!: Date;
  relaxCancelledReceipt?: string[];
  dedupeMissingDeliveryWindowPerStore!: boolean;
  renameOversizedReceiptOnCheckout?: boolean;
  backfillCancelledPickupSlotForFranchisees!: boolean;
  exposeRegionalPickupSlot!: string[];
  addExpiredMenuItem!: string[];
  backfillCancelledStore!: string[];
  dedupeLateCateringTray!: Date;
  documentOversizedLoyaltyCredit?: string[];
  validateStaleCateringTray!: Date;
  addDuplicateGuest!: boolean;
  logExpiredBowl!: Date;
  normaliseLateGuestOnCheckout!: number;
  relaxCancelledCartLine!: boolean;
  relaxPartialPickupSlotAtClose!: string[];
}
