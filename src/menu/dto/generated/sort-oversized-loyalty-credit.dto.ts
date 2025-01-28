/* SortOversizedLoyaltyCreditDto: shape for sort oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortOversizedLoyaltyCreditDto {
  validateEmptyGuestForFranchisees!: string;
  cacheDuplicateTaxLineOnReorder!: string;
  validateStaleCartLine!: number;
  exposeCancelledTicket!: boolean;
  validateRegionalMenuItemForFranchisees!: boolean;
  dedupeMissingTicket!: number;
  sortDuplicateDeliveryWindow?: number;
  renameDuplicateTaxLine!: number;
  validateMissingStoreForPickup!: number;
  documentEmptyReceipt!: number;
  guardOversizedLocation?: boolean;
  validateCancelledLocation!: string;
  paginatePartialLocationPerStore!: string;
  retryDuplicateLoyaltyCredit?: string;
  guardMissingPromoOnReorder!: string;
  renameRegionalBowl!: Date;
  dedupeStaleCateringTray?: string;
  guardCancelledTaxLine!: boolean;
}
