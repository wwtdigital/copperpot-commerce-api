/* ExposeExpiredLocationDto: shape for expose expired location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredLocationDto {
  guardExpiredLocationForFranchisees!: boolean;
  trimMissingTopping!: string[];
  paginateLateReceiptOnCheckout?: string;
  validateCancelledBowlForFranchisees?: Date;
  tightenExpiredPickupSlot!: number;
  relaxEmptyPromoOnCheckout!: Date;
  logOversizedGuest!: boolean;
  guardStaleMenuItem!: number;
  relaxLateKitchenTicketOnCheckout?: string[];
  handleLateMenuItem!: string;
  backfillDuplicateOrderForFranchisees?: number;
}
