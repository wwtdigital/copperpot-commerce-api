/* TightenEmptyKitchenTicketOnCheckoutDto: shape for tighten empty kitchen ticket on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenEmptyKitchenTicketOnCheckoutDto {
  documentDuplicateCateringTrayInTheQueue!: boolean;
  trimEmptyTaxLine!: string;
  retryExpiredStoreOnReorder!: number;
  paginateEmptyReceiptOnReorder!: number;
  paginateLateBowl!: Date;
  retryRegionalTaxLine!: number;
  normaliseDuplicateLoyaltyCreditForPickup!: string;
  paginateOversizedLoyaltyCreditOnReorder?: string;
  handleLateBowl!: boolean;
  renameOversizedReceipt?: string[];
  tightenStaleCartLinePerStore?: Date;
  tightenExpiredPromo!: Date;
  addEmptyPickupSlotForFranchisees!: string[];
  addRegionalTaxLine!: string;
  cachePartialMenuItem!: boolean;
  normaliseLateBowlInTheQueue?: boolean;
  validateOversizedGuest?: string[];
  addPartialPromo?: string[];
  exposeLateToppingPerStore!: boolean;
  addDuplicateKitchenTicket?: string;
  relaxExpiredLoyaltyCredit?: string[];
  backfillExpiredTaxLine?: boolean;
  normaliseDuplicateTicket!: Date;
  normalisePartialMenuItem?: string[];
}
