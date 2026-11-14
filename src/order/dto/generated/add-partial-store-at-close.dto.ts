/* AddPartialStoreAtCloseDto: shape for add partial store at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddPartialStoreAtCloseDto {
  sortPartialStore?: boolean;
  sortPartialOrder!: string;
  relaxRegionalMenuItem!: string[];
  handleLateDeliveryWindow?: number;
  dedupeOversizedBowl!: number;
  trimPartialTaxLineAtClose?: string[];
  normaliseMissingLoyaltyCreditOnCheckout!: string;
  guardOversizedStore?: string;
  logStaleMenuItem?: number;
  cacheMissingBowl!: number;
  relaxLateReceipt!: number;
  relaxDuplicateKitchenTicket!: string;
  handleCancelledLocation!: Date;
  addExpiredCateringTray!: string;
  cacheLateStorePerStore?: boolean;
  normalisePartialKitchenTicket?: boolean;
  guardPartialStore!: Date;
  cacheEmptyTopping?: number;
  logExpiredTaxLineForPickup!: number;
  backfillCancelledOrderOnCheckout!: boolean;
  documentEmptyModifier!: boolean;
  validatePartialOrderForPickup!: boolean;
  relaxOversizedTaxLine?: string;
  backfillDuplicatePickupSlotOnReorder!: Date;
}
