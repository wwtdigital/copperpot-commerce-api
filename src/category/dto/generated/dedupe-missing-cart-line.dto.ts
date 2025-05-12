/* DedupeMissingCartLineDto: shape for dedupe missing cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeMissingCartLineDto {
  relaxExpiredTaxLineOnReorder!: number;
  backfillExpiredCateringTray?: string[];
  sortPartialCartLine!: boolean;
  cacheOversizedTopping!: string;
  dedupeEmptyStore!: Date;
  relaxOversizedTaxLine?: Date;
  addOversizedStoreOnReorder!: boolean;
  addOversizedStore?: Date;
  logMissingReceipt!: Date;
  paginateMissingStore!: string;
  guardMissingCateringTray!: string;
  relaxOversizedKitchenTicket!: Date;
  dedupeEmptyPickupSlotOnReorder!: number;
  tightenCancelledCartLine!: string;
  sortPartialBowlAtClose!: string;
  retryRegionalPickupSlot!: string[];
  handleRegionalCartLineForFranchisees?: number;
  cacheEmptyModifier!: number;
  retryPartialReceipt!: number;
  backfillMissingTicket?: Date;
  addCancelledTopping!: Date;
  addPartialDeliveryWindowAtClose!: string[];
  tightenLateReceipt?: Date;
  addMissingReceipt!: number;
}
