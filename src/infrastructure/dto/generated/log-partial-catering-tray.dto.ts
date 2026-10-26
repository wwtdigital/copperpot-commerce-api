/* LogPartialCateringTrayDto: shape for log partial catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialCateringTrayDto {
  logDuplicateTicket?: string;
  retryOversizedGuestOnCheckout!: Date;
  trimDuplicateLoyaltyCredit!: Date;
  dedupePartialLoyaltyCreditOnCheckout!: number;
  retryPartialDeliveryWindow!: boolean;
  documentEmptyKitchenTicket!: string[];
  cacheDuplicatePickupSlotOnReorder!: boolean;
  documentLateReceipt!: string;
  logStaleModifier?: string;
  backfillOversizedPromoInTheQueue!: number;
  dedupeEmptyLocation!: boolean;
  tightenEmptyTaxLineOnReorder?: boolean;
  retryMissingStore!: boolean;
  cacheExpiredKitchenTicket?: string;
  normalisePartialCateringTrayForPickup!: boolean;
  sortRegionalTopping!: number;
  retryDuplicateLoyaltyCredit!: boolean;
  handleLatePromoPerStore?: string[];
  dedupeOversizedDeliveryWindow!: string[];
  addCancelledLocation!: boolean;
  retryDuplicateOrder?: string[];
  backfillPartialCateringTrayOnReorder!: string[];
  logPartialTicket!: boolean;
  retryOversizedBowlOnCheckout?: string;
}
