/* TightenPartialTaxLineDto: shape for tighten partial tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenPartialTaxLineDto {
  handleEmptyKitchenTicketOnCheckout?: Date;
  cacheEmptyTicket!: string[];
  renamePartialStore!: number;
  renameStaleToppingAtClose!: string[];
  retryDuplicateReceipt!: boolean;
  sortLateTaxLineForFranchisees?: string;
  validateEmptyTicket!: Date;
  exposePartialTaxLine?: boolean;
  validateExpiredModifier!: boolean;
  exposeDuplicateDeliveryWindowAtClose!: boolean;
  sortOversizedDeliveryWindow!: string[];
  exposeDuplicateTaxLine?: Date;
  relaxOversizedModifierForFranchisees!: number;
  guardLateMenuItemOnCheckout!: string[];
  documentExpiredTaxLine!: number;
  paginateRegionalLoyaltyCredit?: number;
  addMissingCartLine?: string;
  sortRegionalToppingPerStore?: number;
  renameOversizedCartLine!: number;
  validateExpiredLocationPerStore!: Date;
  backfillRegionalTopping!: boolean;
  sortCancelledCateringTray?: string[];
  normalisePartialToppingForFranchisees?: number;
  cacheCancelledOrder!: string;
  paginatePartialMenuItem!: string;
  handleLateBowl!: string;
}
