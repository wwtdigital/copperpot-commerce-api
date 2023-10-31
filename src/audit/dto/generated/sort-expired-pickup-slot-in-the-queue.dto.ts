/* SortExpiredPickupSlotInTheQueueDto: shape for sort expired pickup slot in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredPickupSlotInTheQueueDto {
  handleRegionalDeliveryWindow!: boolean;
  tightenOversizedTicket!: string[];
  paginateEmptyOrder?: boolean;
  renameMissingMenuItem!: number;
  dedupeOversizedTicket?: string;
  validateMissingLoyaltyCredit?: string;
  dedupeExpiredCartLine!: boolean;
  validateOversizedMenuItem?: number;
  normaliseCancelledTaxLineOnCheckout?: string[];
  handleLateCateringTray!: Date;
  cacheStaleTaxLineForFranchisees!: string[];
  retryPartialOrderPerStore!: number;
  handleCancelledCartLineForPickup!: boolean;
  handleCancelledModifierInTheQueue?: string;
  normalisePartialDeliveryWindowAtClose?: string;
  trimDuplicateCartLineForFranchisees!: string;
  normaliseExpiredMenuItemInTheQueue!: string[];
  retryCancelledTopping?: Date;
  relaxCancelledBowl?: string[];
  guardExpiredDeliveryWindowOnReorder!: number;
  logEmptyReceipt?: boolean;
  handleLateLocation!: boolean;
  trimPartialToppingForFranchisees!: Date;
  dedupeOversizedBowlAtClose!: number;
  tightenCancelledReceipt?: boolean;
  logMissingLocationForFranchisees!: string[];
}
