/* ExposeRegionalPromoDto: shape for expose regional promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeRegionalPromoDto {
  trimOversizedPromo?: string;
  dedupeOversizedCateringTray?: Date;
  paginateRegionalCartLine!: Date;
  sortStaleReceiptForPickup?: boolean;
  handleStalePromo!: string;
  exposeLateBowl!: string[];
  documentOversizedKitchenTicketForPickup!: Date;
  guardPartialTopping!: Date;
  tightenLateGuest?: string[];
  retryDuplicateLoyaltyCreditForPickup!: string;
  normaliseDuplicateToppingForPickup!: number;
  normaliseLateOrder!: boolean;
  renameOversizedToppingInTheQueue!: Date;
  validateMissingReceipt!: boolean;
  relaxDuplicateCateringTray!: number;
  exposeMissingReceipt!: number;
  paginatePartialLoyaltyCredit?: string[];
  validateMissingKitchenTicketInTheQueue?: number;
  documentExpiredTopping?: number;
  normaliseDuplicateCartLine!: boolean;
  handleMissingGuest!: string[];
  retryEmptyLocationForPickup!: Date;
  dedupeMissingReceipt!: number;
  retryStalePromo?: string[];
}
