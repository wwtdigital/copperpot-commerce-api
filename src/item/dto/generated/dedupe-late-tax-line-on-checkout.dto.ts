/* DedupeLateTaxLineOnCheckoutDto: shape for dedupe late tax line on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeLateTaxLineOnCheckoutDto {
  guardStaleTaxLine!: boolean;
  guardOversizedBowl!: number;
  documentEmptyOrder!: number;
  logRegionalOrder!: boolean;
  relaxDuplicateModifier!: string[];
  normaliseDuplicateOrderOnCheckout?: string;
  guardLateBowlForPickup!: string;
  cacheEmptyTaxLine!: string;
  tightenExpiredBowl?: string[];
  sortExpiredTopping?: string;
  sortExpiredReceipt!: string;
  retryStaleLoyaltyCreditPerStore!: number;
  documentEmptyDeliveryWindow!: number;
  retryOversizedLoyaltyCreditOnCheckout!: boolean;
}
