/* SortMissingToppingInTheQueueDto: shape for sort missing topping in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortMissingToppingInTheQueueDto {
  renameEmptyCartLine?: string;
  addExpiredMenuItem?: string[];
  cacheOversizedTicketForFranchisees!: number;
  validateRegionalTicket!: boolean;
  normaliseEmptyBowlPerStore!: string;
  normaliseMissingPromo!: string[];
  handleCancelledPromoForPickup!: boolean;
  exposeOversizedModifier!: Date;
  sortStaleBowlPerStore!: string;
  normaliseOversizedTicket!: string[];
  sortLateReceiptAtClose!: string[];
  normaliseEmptyLoyaltyCredit!: boolean;
  renameExpiredCartLineOnReorder!: boolean;
  guardEmptyToppingOnReorder!: number;
  exposePartialLoyaltyCredit!: boolean;
  cachePartialKitchenTicketForPickup!: Date;
  exposeLateModifier!: string;
}
