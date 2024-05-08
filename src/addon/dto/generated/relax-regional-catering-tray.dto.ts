/* RelaxRegionalCateringTrayDto: shape for relax regional catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxRegionalCateringTrayDto {
  logExpiredCateringTray?: boolean;
  documentPartialPromo!: Date;
  exposeCancelledKitchenTicket!: number;
  trimEmptyMenuItem!: Date;
  sortMissingDeliveryWindowInTheQueue!: number;
  dedupeRegionalKitchenTicket!: string;
  exposeExpiredCateringTrayInTheQueue!: number;
  trimStaleDeliveryWindow?: string[];
  handleStalePickupSlot?: number;
  guardEmptyKitchenTicketForPickup!: Date;
  paginateRegionalCartLine?: number;
  documentPartialReceiptOnCheckout!: string;
  cacheStaleModifier!: string[];
  logCancelledModifier!: boolean;
  logLateMenuItem!: string[];
  logCancelledTaxLineAtClose!: number;
  cacheLateGuestAtClose!: string[];
  guardDuplicateBowl!: number;
  backfillEmptyCateringTray?: boolean;
  normalisePartialLoyaltyCredit!: Date;
  relaxLateMenuItemPerStore!: string;
  relaxDuplicateOrderAtClose!: string[];
}
