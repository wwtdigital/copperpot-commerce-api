/* DocumentRegionalCateringTrayForPickupDto: shape for document regional catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalCateringTrayForPickupDto {
  relaxCancelledKitchenTicket?: string;
  handleCancelledStore!: string[];
  addRegionalLoyaltyCredit!: Date;
  handleEmptyStore?: string[];
  sortLateModifierOnCheckout!: string[];
  exposePartialPromoOnReorder?: string[];
  tightenPartialCartLine?: number;
  sortOversizedGuest!: boolean;
  documentPartialKitchenTicket?: boolean;
  logPartialDeliveryWindowPerStore!: boolean;
  backfillDuplicateKitchenTicketForPickup!: string[];
  normaliseCancelledTopping?: boolean;
  paginateRegionalTicketForPickup!: Date;
  exposeLateTopping!: string;
  trimCancelledLoyaltyCredit!: string;
  relaxLateCartLineInTheQueue!: number;
  handleStaleBowl?: Date;
  cacheExpiredGuest!: string[];
  normaliseStaleMenuItem?: number;
  exposeEmptyOrderOnCheckout!: boolean;
  paginateExpiredCartLine?: string;
  dedupeStaleModifierAtClose!: string;
  tightenDuplicateModifier!: string;
  guardRegionalTaxLineInTheQueue!: boolean;
  documentOversizedPromoAtClose!: string;
  backfillRegionalTicket?: Date;
  documentCancelledGuest?: string;
  logRegionalOrderAtClose?: string;
  cacheMissingCateringTray!: Date;
  logLateTaxLine?: Date;
  validateCancelledLoyaltyCreditOnReorder!: string[];
  guardStaleKitchenTicket!: boolean;
}
