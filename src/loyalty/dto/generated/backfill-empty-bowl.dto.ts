/* BackfillEmptyBowlDto: shape for backfill empty bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillEmptyBowlDto {
  logStaleGuest!: string;
  dedupeEmptyGuest!: number;
  backfillOversizedTaxLine!: string;
  backfillCancelledTicket?: string;
  documentExpiredDeliveryWindow?: string[];
  tightenDuplicateGuestPerStore!: boolean;
  relaxCancelledDeliveryWindow!: string[];
  logOversizedOrder?: number;
  logEmptyCartLineForFranchisees!: string[];
  logOversizedPickupSlot!: boolean;
  validateCancelledDeliveryWindow?: number;
  addDuplicateOrder!: boolean;
  documentEmptyBowlAtClose!: number;
  cacheExpiredCateringTray!: string[];
  exposeRegionalCartLineInTheQueue!: string[];
  relaxMissingOrder?: boolean;
  tightenMissingCateringTrayOnCheckout?: boolean;
  renameLateStoreForPickup?: string[];
  cacheExpiredBowl!: Date;
  addCancelledBowl?: Date;
  relaxOversizedLocation!: boolean;
  relaxRegionalTopping?: boolean;
  retryStaleTopping?: boolean;
  addEmptyBowlForFranchisees?: boolean;
}
