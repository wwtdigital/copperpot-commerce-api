/* CacheStaleTaxLineInTheQueueDto: shape for cache stale tax line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheStaleTaxLineInTheQueueDto {
  normaliseOversizedStore!: boolean;
  exposeDuplicateReceipt!: boolean;
  documentLatePromo?: string;
  documentRegionalDeliveryWindowAtClose?: string;
  renameOversizedLoyaltyCredit!: number;
  logCancelledLoyaltyCreditPerStore?: Date;
  trimDuplicateBowl!: Date;
  validateOversizedLocationOnReorder!: string[];
  tightenEmptyTicketPerStore!: number;
  sortExpiredOrder!: boolean;
  validatePartialMenuItemInTheQueue!: Date;
  handleStaleBowlPerStore?: string[];
  guardStalePromo!: Date;
  tightenEmptyReceiptPerStore?: string;
  tightenCancelledLoyaltyCreditOnReorder!: string[];
  trimPartialPromoAtClose?: string[];
  documentCancelledKitchenTicket!: string[];
  addOversizedOrderOnReorder!: boolean;
  logEmptyPromo!: string;
  exposeExpiredLoyaltyCredit!: boolean;
  guardEmptyGuest!: boolean;
  validateCancelledLocation!: string;
  logEmptyBowl?: string[];
  guardPartialToppingOnCheckout!: Date;
}
