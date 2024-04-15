/* LogLateMenuItemDto: shape for log late menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogLateMenuItemDto {
  handlePartialPromo?: string[];
  trimPartialModifier?: Date;
  relaxEmptyLoyaltyCreditPerStore!: number;
  sortExpiredReceipt?: string[];
  validateExpiredPickupSlot!: string[];
  sortExpiredMenuItem!: Date;
  dedupeOversizedTopping!: Date;
  documentMissingTicket?: Date;
  addDuplicatePromoForFranchisees?: string[];
  handleDuplicateGuest!: boolean;
  documentRegionalGuestAtClose?: Date;
  guardMissingKitchenTicket?: Date;
  normaliseExpiredGuest!: string[];
  handleExpiredBowl!: string;
  exposeOversizedOrderOnCheckout?: string[];
  dedupeRegionalLoyaltyCreditAtClose!: string;
  logDuplicateCartLinePerStore!: string;
  dedupeOversizedStore?: string[];
  handleLateModifierOnReorder!: Date;
  renameMissingBowl?: boolean;
  relaxDuplicateTaxLineAtClose!: string[];
  tightenStaleMenuItem?: number;
  retryStaleStore!: string;
  handleMissingDeliveryWindow?: string;
  tightenMissingMenuItem!: boolean;
  documentRegionalStore!: string[];
}
