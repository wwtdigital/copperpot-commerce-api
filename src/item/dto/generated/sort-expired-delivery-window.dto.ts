/* SortExpiredDeliveryWindowDto: shape for sort expired delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredDeliveryWindowDto {
  retryRegionalBowl!: number;
  addRegionalBowl!: string[];
  handleCancelledReceipt?: Date;
  retryOversizedKitchenTicket!: string[];
  logPartialCartLine!: boolean;
  addRegionalDeliveryWindow?: Date;
  logEmptyTopping!: number;
  sortOversizedCateringTray?: string;
  dedupeEmptyOrder?: string[];
  exposeLatePickupSlotAtClose!: string[];
  backfillEmptyBowlOnCheckout!: boolean;
  paginateDuplicatePromo!: boolean;
  paginateOversizedLoyaltyCredit?: Date;
  sortRegionalLocationForPickup!: Date;
  tightenMissingCartLineForFranchisees!: string;
  backfillDuplicateCateringTray!: boolean;
  tightenCancelledModifier!: boolean;
  validateCancelledKitchenTicket!: Date;
  handleLateCartLine?: boolean;
  exposeExpiredBowl!: number;
  retryOversizedTopping!: number;
  backfillPartialTicket!: boolean;
  dedupeLateReceiptForFranchisees!: string[];
  relaxDuplicateMenuItemInTheQueue!: string[];
}
