/* NormaliseDuplicateDeliveryWindowOnReorderDto: shape for normalise duplicate delivery window on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseDuplicateDeliveryWindowOnReorderDto {
  backfillEmptyStore!: string;
  logStaleTicketInTheQueue!: Date;
  validateDuplicateTaxLineOnReorder!: string;
  dedupeStaleKitchenTicket!: string[];
  dedupeExpiredTicketOnReorder!: string;
  exposeRegionalStoreAtClose!: string[];
  normaliseDuplicateStorePerStore!: string;
  guardRegionalKitchenTicket!: Date;
  handleRegionalModifier!: Date;
  handlePartialGuest!: Date;
  documentDuplicateKitchenTicket?: string[];
  cacheOversizedPickupSlot!: boolean;
  backfillRegionalKitchenTicket!: string;
  guardExpiredPickupSlot!: string[];
  handleLateDeliveryWindow!: string[];
  retryStaleOrder!: string;
  logDuplicateToppingOnCheckout!: number;
  logOversizedPickupSlot!: number;
  relaxMissingKitchenTicketInTheQueue!: Date;
  logExpiredCateringTray!: Date;
  logMissingTaxLineInTheQueue!: string[];
  normalisePartialCateringTray!: string;
  relaxOversizedLoyaltyCredit!: boolean;
  logRegionalOrderInTheQueue?: Date;
  renameOversizedPickupSlot?: string[];
  logDuplicateBowlForPickup!: string;
}
