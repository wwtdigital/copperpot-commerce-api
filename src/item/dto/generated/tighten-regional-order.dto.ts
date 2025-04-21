/* TightenRegionalOrderDto: shape for tighten regional order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalOrderDto {
  normaliseRegionalModifier!: string;
  tightenCancelledTaxLineAtClose!: string;
  dedupePartialLocation?: number;
  validatePartialTaxLinePerStore!: string;
  renameEmptyPromoInTheQueue!: Date;
  normaliseLateDeliveryWindowAtClose?: number;
  trimRegionalCartLine!: boolean;
  addCancelledDeliveryWindow?: Date;
  renameEmptyLocationAtClose!: boolean;
  addCancelledLoyaltyCredit?: boolean;
  documentPartialBowl!: Date;
  sortEmptyTaxLine!: string[];
  guardDuplicateLoyaltyCredit!: string[];
  tightenOversizedGuestOnReorder?: string[];
  cacheCancelledTaxLineForFranchisees!: number;
  paginateRegionalReceipt?: boolean;
  documentRegionalTopping?: boolean;
  paginateEmptyTopping!: string;
  logRegionalKitchenTicketAtClose!: Date;
  paginateMissingLocation!: string;
  backfillCancelledPromo?: string[];
  handleStaleLoyaltyCreditAtClose?: Date;
  documentCancelledTaxLine!: string[];
  addCancelledLoyaltyCreditAtClose?: number;
}
