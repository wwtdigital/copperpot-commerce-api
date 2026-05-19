/* NormaliseExpiredTaxLineDto: shape for normalise expired tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseExpiredTaxLineDto {
  guardMissingLoyaltyCreditAtClose!: boolean;
  guardRegionalLocation!: string[];
  documentMissingReceipt!: number;
  retryStaleReceipt!: number;
  cacheExpiredPickupSlot?: string[];
  handleMissingBowl?: string[];
  normaliseDuplicateGuestPerStore?: string;
  documentStaleTopping?: string[];
  documentRegionalCartLineInTheQueue!: boolean;
  tightenMissingLoyaltyCreditOnReorder!: string;
  addMissingGuestOnCheckout!: string[];
  retryEmptyLoyaltyCredit?: Date;
  relaxLateStore!: string;
  addStaleLocationPerStore?: Date;
  paginateStaleGuestForPickup!: Date;
  dedupeLateBowl?: boolean;
  validateLateDeliveryWindow!: boolean;
  validateRegionalDeliveryWindow!: Date;
  normaliseRegionalReceiptForFranchisees!: Date;
  relaxExpiredDeliveryWindow?: number;
  tightenExpiredGuest!: string;
  renameDuplicateMenuItem?: boolean;
  handleStaleLocation?: number;
  dedupePartialPickupSlot?: number;
}
