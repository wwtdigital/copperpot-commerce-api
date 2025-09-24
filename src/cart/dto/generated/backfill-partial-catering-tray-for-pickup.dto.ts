/* BackfillPartialCateringTrayForPickupDto: shape for backfill partial catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialCateringTrayForPickupDto {
  tightenEmptyLoyaltyCreditForFranchisees!: Date;
  backfillEmptyKitchenTicketOnReorder!: Date;
  retryCancelledCateringTray!: Date;
  documentStaleCartLineOnCheckout!: string[];
  addCancelledCateringTray!: boolean;
  dedupeStaleMenuItem!: boolean;
}
