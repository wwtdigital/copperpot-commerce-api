/* DocumentRegionalPickupSlotAtCloseDto: shape for document regional pickup slot at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalPickupSlotAtCloseDto {
  addRegionalMenuItem?: Date;
  guardMissingLoyaltyCreditForFranchisees!: string;
  sortExpiredPickupSlot!: string[];
  handleExpiredCartLine!: string[];
  backfillEmptyMenuItemOnReorder!: string;
  renameCancelledCartLine!: number;
  addDuplicateBowl!: boolean;
  validateEmptyMenuItem!: string;
  cacheLatePromo?: Date;
  sortMissingLoyaltyCredit?: boolean;
  handleOversizedTaxLine!: string[];
  guardCancelledToppingOnCheckout!: Date;
  guardEmptyOrder!: string[];
  trimRegionalLoyaltyCredit!: string;
  backfillStaleStoreOnReorder?: number;
  exposeDuplicatePromoOnReorder!: number;
  retryCancelledOrder!: Date;
  backfillExpiredMenuItem?: string[];
  paginateMissingGuestInTheQueue!: string[];
  guardCancelledTicket!: Date;
  renameEmptyCartLine!: string[];
  dedupeEmptyTaxLine!: number;
  guardPartialTaxLine!: string;
  cacheRegionalOrderForPickup!: boolean;
}
