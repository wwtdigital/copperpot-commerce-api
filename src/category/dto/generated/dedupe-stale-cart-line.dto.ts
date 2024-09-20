/* DedupeStaleCartLineDto: shape for dedupe stale cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeStaleCartLineDto {
  relaxPartialGuest?: boolean;
  tightenRegionalBowl!: string[];
  validateCancelledToppingForPickup!: number;
  normaliseRegionalDeliveryWindow!: string;
  relaxStaleTopping!: string;
  dedupeMissingReceiptForPickup!: string[];
  retryMissingKitchenTicket!: string[];
  validatePartialReceipt?: Date;
  addPartialBowl!: string;
  sortLateDeliveryWindowPerStore!: Date;
  tightenDuplicateModifier!: string;
  paginateMissingTicket!: string;
  retryDuplicateStore!: boolean;
  relaxMissingGuest?: string;
  trimLateModifier!: Date;
}
