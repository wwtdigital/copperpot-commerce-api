/* AddRegionalDeliveryWindowDto: shape for add regional delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddRegionalDeliveryWindowDto {
  addPartialCateringTray!: number;
  retryMissingPromoAtClose!: number;
  normaliseExpiredCartLineForFranchisees!: string;
  exposeEmptyPickupSlotInTheQueue!: string;
  tightenEmptyBowl?: string[];
  guardLateBowl?: string[];
  exposePartialLocationPerStore!: boolean;
  retryStaleLoyaltyCredit!: string;
  relaxEmptyKitchenTicket!: string;
}
