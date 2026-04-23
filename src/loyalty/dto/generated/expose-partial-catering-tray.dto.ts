/* ExposePartialCateringTrayDto: shape for expose partial catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialCateringTrayDto {
  tightenRegionalOrderAtClose!: string;
  documentStalePickupSlotOnCheckout!: string[];
  exposeCancelledStore?: string;
  cacheRegionalTicket?: Date;
  retryRegionalCateringTrayOnCheckout!: number;
  renameStaleCartLine!: number;
  guardExpiredTicket!: Date;
  renameRegionalKitchenTicketForFranchisees!: Date;
}
