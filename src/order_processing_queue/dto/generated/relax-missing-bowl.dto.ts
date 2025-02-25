/* RelaxMissingBowlDto: shape for relax missing bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxMissingBowlDto {
  relaxExpiredOrderInTheQueue!: boolean;
  sortStaleKitchenTicketOnCheckout!: boolean;
  dedupeCancelledOrder!: Date;
  paginateLateStore!: string[];
  validateStaleLoyaltyCreditInTheQueue!: boolean;
  cacheDuplicateOrder!: Date;
  handleDuplicateTopping!: string;
  addStaleTicketOnCheckout!: number;
  cacheDuplicatePromo!: string[];
  exposeEmptyTicketAtClose!: boolean;
  tightenOversizedTaxLine!: string[];
  documentRegionalCateringTray!: string;
  backfillEmptyDeliveryWindow?: Date;
  trimMissingTopping!: string[];
  tightenCancelledTicketForFranchisees!: string[];
  renameCancelledOrder!: string;
  renameStaleGuest!: string;
}
