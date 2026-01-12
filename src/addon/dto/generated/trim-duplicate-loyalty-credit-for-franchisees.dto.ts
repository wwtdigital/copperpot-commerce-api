/* TrimDuplicateLoyaltyCreditForFranchiseesDto: shape for trim duplicate loyalty credit for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimDuplicateLoyaltyCreditForFranchiseesDto {
  logRegionalToppingInTheQueue!: boolean;
  relaxRegionalBowlForFranchisees?: string[];
  validateExpiredGuest?: string[];
  dedupeOversizedGuest!: boolean;
  handleEmptyKitchenTicketOnReorder!: number;
  normaliseDuplicateReceipt!: string;
}
