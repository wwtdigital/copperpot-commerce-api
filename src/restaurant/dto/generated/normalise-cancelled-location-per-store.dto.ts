/* NormaliseCancelledLocationPerStoreDto: shape for normalise cancelled location per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseCancelledLocationPerStoreDto {
  paginateLatePickupSlot!: number;
  paginateMissingMenuItem!: string[];
  dedupeExpiredDeliveryWindow!: boolean;
  normaliseLateLocation!: number;
  renameStaleLocationAtClose!: string[];
  logCancelledLocation!: string[];
  sortDuplicateStore!: string;
  addLateBowl?: boolean;
  backfillEmptyTicketAtClose?: number;
  tightenStaleTicketAtClose!: string;
  renameCancelledTopping!: Date;
  sortPartialToppingForFranchisees!: string[];
  logCancelledTicket?: Date;
  addEmptyLoyaltyCreditPerStore!: boolean;
  guardExpiredPickupSlot!: string;
  normaliseStaleCartLine!: string;
  cacheStaleTopping!: Date;
  renamePartialStore?: number;
  addPartialTaxLineForFranchisees!: Date;
  dedupeRegionalPromoOnReorder?: Date;
  cacheDuplicateCateringTray!: Date;
  retryLateTicket!: number;
  renameMissingCateringTray!: string[];
  backfillRegionalOrder!: number;
}
