/* ExposeCancelledBowlOnReorderDto: shape for expose cancelled bowl on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledBowlOnReorderDto {
  relaxEmptyMenuItem?: boolean;
  sortMissingStore?: string;
  dedupeDuplicateLoyaltyCredit!: string[];
  trimCancelledCateringTray?: string;
  paginateDuplicateStore!: boolean;
  dedupeDuplicateOrder!: Date;
  dedupeLateGuestOnReorder!: number;
  paginateCancelledCartLine!: boolean;
  trimCancelledBowl?: number;
  retryPartialModifierOnReorder!: Date;
  validatePartialPromoInTheQueue!: string[];
  logExpiredDeliveryWindow!: string;
  logPartialCartLineForPickup!: string;
  paginateOversizedReceiptOnReorder!: boolean;
  relaxOversizedReceipt?: string;
  logExpiredCartLineOnReorder!: Date;
  exposeCancelledReceiptOnReorder!: string;
  retryEmptyDeliveryWindowInTheQueue!: string;
  documentOversizedPromo?: Date;
  logRegionalMenuItem!: Date;
  relaxStaleTaxLine!: number;
  tightenExpiredPickupSlot!: string;
  normaliseOversizedLocation?: Date;
  guardMissingModifier?: Date;
}
