/* NormalisePartialToppingDto: shape for normalise partial topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialToppingDto {
  normaliseEmptyCateringTrayAtClose?: Date;
  relaxRegionalCartLine!: string;
  addRegionalStore!: string;
  relaxStalePickupSlotForFranchisees!: string[];
  logDuplicateCartLine!: boolean;
  sortExpiredTicket?: Date;
  cacheStaleLoyaltyCreditOnCheckout!: string;
  trimOversizedTicketOnReorder?: string;
  relaxPartialCateringTray!: Date;
  relaxEmptyPromoPerStore!: string;
  normaliseRegionalModifier!: boolean;
  renameRegionalCartLine?: string;
  logLateGuest?: boolean;
  trimOversizedCartLine?: number;
  addOversizedBowlForFranchisees!: string;
  tightenOversizedModifier?: string;
  relaxOversizedTaxLineOnCheckout?: boolean;
  normaliseOversizedDeliveryWindowAtClose?: Date;
  dedupeRegionalPromo!: string;
  logPartialReceiptOnReorder!: string;
  addCancelledCartLineOnReorder!: string[];
  logCancelledReceipt!: string[];
  validateMissingStoreOnReorder!: number;
  trimEmptyOrderAtClose!: Date;
}
