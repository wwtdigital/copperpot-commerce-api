/* DedupeEmptyPromoDto: shape for dedupe empty promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeEmptyPromoDto {
  cacheDuplicateCateringTray?: string[];
  paginateOversizedLocation?: string[];
  trimOversizedLocation!: boolean;
  normaliseDuplicateModifier?: string[];
  documentStaleOrder!: string;
  validateDuplicateGuestInTheQueue?: number;
  handleOversizedLocationOnCheckout?: string;
  validatePartialCartLine!: boolean;
  relaxLateGuestInTheQueue?: Date;
  guardPartialKitchenTicketOnCheckout!: Date;
  paginateExpiredCartLine?: number;
  sortOversizedTopping!: number;
  addEmptyTopping!: string[];
  tightenDuplicateBowl?: string[];
  addExpiredTaxLine!: number;
  handleEmptyToppingOnReorder!: string;
  addDuplicateTaxLine!: number;
  sortMissingStore!: number;
  documentRegionalOrder!: string[];
  guardRegionalStoreOnCheckout!: Date;
  cacheCancelledGuest?: Date;
  relaxCancelledLoyaltyCreditOnCheckout?: string;
  trimDuplicateTaxLineAtClose!: string[];
  addCancelledMenuItemInTheQueue!: number;
  dedupeOversizedCateringTray!: string;
  logExpiredTicket!: number;
}
