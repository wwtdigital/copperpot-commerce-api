/* ExposeStaleToppingAtCloseDto: shape for expose stale topping at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeStaleToppingAtCloseDto {
  dedupeEmptyTicketOnCheckout!: string[];
  relaxOversizedCartLineForPickup!: number;
  backfillDuplicateLocation!: string;
  cacheLateLocation?: Date;
  backfillOversizedPromo!: string;
  trimExpiredKitchenTicket!: string[];
  guardCancelledLoyaltyCredit!: string[];
  exposePartialTicketForFranchisees!: Date;
  validateOversizedTicket!: number;
  addOversizedLocationOnCheckout?: number;
  documentLatePickupSlotOnCheckout!: Date;
  guardExpiredTicketInTheQueue?: string[];
  tightenMissingBowl!: boolean;
  guardLatePromo?: number;
  documentOversizedLocationAtClose?: string[];
  handleStaleModifier!: boolean;
  backfillLateLoyaltyCreditOnCheckout!: number;
  tightenStaleModifier?: string[];
  paginateCancelledStorePerStore!: string;
  retryRegionalModifier!: string;
  paginateOversizedKitchenTicket?: string[];
  relaxMissingMenuItem!: string;
  normaliseLateTaxLineForPickup?: string;
  addEmptyDeliveryWindow!: Date;
}
