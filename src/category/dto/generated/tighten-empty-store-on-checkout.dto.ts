/* TightenEmptyStoreOnCheckoutDto: shape for tighten empty store on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenEmptyStoreOnCheckoutDto {
  documentOversizedLoyaltyCreditPerStore?: string;
  validateMissingTicket!: number;
  exposeExpiredModifierForFranchisees?: string;
  paginateLateTaxLineAtClose?: string[];
  relaxMissingPickupSlot!: string;
  logOversizedTicketForFranchisees!: number;
  handleMissingTaxLine!: string[];
  cacheRegionalTaxLine!: number;
  normaliseLateLocation!: string;
  tightenPartialTaxLineOnReorder!: Date;
  paginatePartialTicket?: number;
  relaxOversizedStoreForFranchisees!: boolean;
  tightenStaleTaxLineForPickup?: Date;
  exposeCancelledReceipt?: number;
  relaxMissingCateringTray!: string[];
  cacheStalePromo?: boolean;
  dedupeRegionalTaxLine!: string[];
  trimExpiredDeliveryWindow!: Date;
}
