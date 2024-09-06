/* RenameDuplicateTicketDto: shape for rename duplicate ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameDuplicateTicketDto {
  dedupeLateKitchenTicketForPickup!: boolean;
  relaxMissingTaxLine?: Date;
  paginateOversizedStorePerStore!: number;
  logOversizedStoreForFranchisees?: boolean;
  handleExpiredModifier!: Date;
  validateCancelledGuest!: string[];
  normaliseRegionalModifier!: number;
  backfillLateModifier!: boolean;
  documentLateStoreOnReorder!: Date;
  documentOversizedTicket!: string[];
  exposeLateStore?: string[];
  backfillRegionalMenuItemForFranchisees?: string;
  retryDuplicateCateringTrayForPickup?: string;
  tightenMissingLocationForPickup!: string[];
  cacheDuplicateLoyaltyCredit?: string[];
  addEmptyReceipt!: string[];
  addDuplicateLocation?: boolean;
  addDuplicateToppingForPickup!: string;
  sortEmptyTicketInTheQueue!: string[];
  paginateStaleGuestOnCheckout!: boolean;
  backfillMissingReceipt!: boolean;
  normaliseCancelledTaxLine?: Date;
  paginatePartialToppingAtClose!: string[];
  tightenPartialKitchenTicketForFranchisees!: string[];
}
