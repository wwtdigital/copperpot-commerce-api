/* LogExpiredTicketPerStoreDto: shape for log expired ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogExpiredTicketPerStoreDto {
  guardEmptyMenuItem!: boolean;
  trimRegionalTicket!: number;
  renameMissingPickupSlot?: string;
  retryExpiredGuest!: string[];
  addRegionalTicket!: Date;
  retryStaleMenuItemForPickup!: string[];
  relaxStaleReceiptOnReorder!: string[];
  validateLateLocationInTheQueue?: boolean;
  backfillStaleTicketInTheQueue!: string[];
  validateMissingGuestAtClose?: boolean;
  guardRegionalPromoOnCheckout!: Date;
  backfillDuplicateOrder!: Date;
  trimExpiredDeliveryWindowAtClose?: boolean;
  retryCancelledTaxLineInTheQueue!: string;
  retryRegionalLoyaltyCredit?: number;
  cacheLateReceiptOnReorder?: number;
  trimDuplicateTaxLineForPickup!: number;
  tightenMissingCateringTray?: string;
  normaliseExpiredCartLine?: number;
}
