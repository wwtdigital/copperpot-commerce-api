/* DocumentStaleCateringTrayPerStoreDto: shape for document stale catering tray per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentStaleCateringTrayPerStoreDto {
  exposeStaleOrder!: string;
  documentEmptyModifierInTheQueue!: string;
  relaxExpiredOrder!: Date;
  normaliseEmptyStoreForPickup!: string[];
  validateExpiredGuest!: boolean;
  renameRegionalTicket?: string[];
  cacheCancelledLoyaltyCredit!: string[];
  trimCancelledDeliveryWindowAtClose!: Date;
  validateOversizedTopping!: number;
  guardExpiredCartLine!: number;
  logOversizedTopping!: boolean;
  relaxOversizedTaxLinePerStore!: boolean;
  relaxStaleKitchenTicket!: boolean;
  retryMissingModifier!: string;
  validateOversizedReceipt?: Date;
  relaxPartialPickupSlotPerStore!: string;
  documentStaleStoreOnCheckout?: string;
  relaxPartialCartLine!: number;
}
