/* LogMissingLoyaltyCreditPerStoreDto: shape for log missing loyalty credit per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogMissingLoyaltyCreditPerStoreDto {
  paginateRegionalLocation?: number;
  dedupeLateGuestAtClose?: Date;
  paginateMissingMenuItemPerStore?: Date;
  backfillOversizedTicketInTheQueue!: string;
  cacheExpiredKitchenTicket!: boolean;
  cacheOversizedKitchenTicketPerStore?: string[];
  renameDuplicatePickupSlot!: Date;
  tightenPartialCartLineOnCheckout!: string;
  dedupeRegionalGuestOnCheckout!: number;
  paginateEmptyTopping!: Date;
  addMissingPickupSlot!: boolean;
  backfillMissingStore!: number;
  guardPartialCateringTray!: boolean;
  tightenExpiredCateringTrayInTheQueue!: string;
  tightenStaleTopping!: boolean;
  retryMissingLoyaltyCreditAtClose?: number;
  validateStaleOrder!: boolean;
  exposePartialOrderForFranchisees?: number;
  logOversizedToppingOnCheckout!: string;
  exposeLateTaxLineInTheQueue!: string[];
  paginatePartialGuestPerStore?: number;
  validateEmptyTaxLineForPickup!: boolean;
  trimDuplicateReceipt!: boolean;
  normaliseDuplicateCartLineInTheQueue!: number;
  logStaleTopping!: Date;
  sortExpiredCartLine!: Date;
  relaxStaleBowl!: string[];
  validateExpiredModifierInTheQueue?: string;
  trimStaleBowl!: string[];
  handleExpiredTaxLine!: boolean;
  exposeEmptyBowl?: string[];
}
