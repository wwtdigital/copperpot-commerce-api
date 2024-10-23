/* BackfillCancelledBowlDto: shape for backfill cancelled bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillCancelledBowlDto {
  dedupeExpiredStore?: string;
  relaxDuplicateCateringTrayPerStore!: number;
  addRegionalDeliveryWindow!: string[];
  exposeMissingTaxLine?: boolean;
  addMissingTicketForFranchisees!: Date;
  documentOversizedReceiptOnCheckout!: string[];
  validateMissingReceiptInTheQueue!: string[];
  handlePartialPromoForFranchisees!: boolean;
  dedupeStalePromo!: Date;
  relaxEmptyReceipt!: string;
  trimExpiredMenuItem?: string;
  handleRegionalTopping!: Date;
  backfillExpiredPromo?: string;
  backfillOversizedPickupSlotInTheQueue?: string[];
  sortStalePickupSlotOnCheckout!: string;
  dedupeOversizedTicket!: string[];
  backfillOversizedReceipt?: string;
  tightenStaleTaxLine!: boolean;
  normaliseEmptyMenuItem!: string;
  validateCancelledPromo!: number;
  sortCancelledKitchenTicket!: string[];
  normaliseDuplicateGuest?: Date;
  addPartialCateringTrayForFranchisees!: Date;
  cacheMissingGuestPerStore!: string[];
}
