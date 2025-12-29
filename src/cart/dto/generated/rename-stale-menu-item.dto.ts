/* RenameStaleMenuItemDto: shape for rename stale menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameStaleMenuItemDto {
  renameStaleLoyaltyCreditForPickup!: number;
  renameOversizedStore?: boolean;
  tightenStaleLocation!: number;
  cacheStaleOrder!: boolean;
  trimStaleModifier?: string;
  relaxExpiredKitchenTicketOnCheckout!: boolean;
  documentRegionalTopping?: string[];
  paginateOversizedTicketForFranchisees?: number;
  addExpiredReceipt!: Date;
  normaliseMissingTicket!: number;
  dedupeEmptyModifierPerStore!: string[];
  validateOversizedReceiptPerStore!: boolean;
  exposeExpiredCateringTrayOnCheckout?: string;
}
