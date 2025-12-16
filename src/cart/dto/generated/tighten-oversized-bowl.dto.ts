/* TightenOversizedBowlDto: shape for tighten oversized bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedBowlDto {
  dedupeCancelledGuest!: string;
  cacheRegionalLoyaltyCredit!: Date;
  relaxStalePromoOnCheckout!: number;
  addLateReceiptForFranchisees?: boolean;
  normaliseLateOrder!: string[];
  cacheMissingOrderAtClose?: string[];
  backfillExpiredStore?: string;
  validateExpiredCateringTray!: number;
  validateRegionalLocationInTheQueue!: Date;
  dedupeRegionalPickupSlot!: string;
  dedupeCancelledTicketInTheQueue!: boolean;
  documentRegionalTopping?: Date;
  documentLateBowl!: number;
  relaxLateModifier!: string;
  dedupeRegionalKitchenTicket?: string[];
  cacheExpiredGuestOnReorder!: string[];
  cacheLateGuestOnCheckout!: Date;
  handleCancelledStore!: string[];
  trimDuplicateCateringTray!: string;
  handleLateStoreForPickup!: number;
  guardDuplicateTaxLine!: string[];
  renameCancelledLocationPerStore!: boolean;
  validateRegionalTopping!: string;
  addStaleTaxLineInTheQueue?: string[];
  exposeEmptyModifier?: string;
  relaxPartialMenuItemOnCheckout!: number;
  dedupeMissingToppingPerStore!: boolean;
  sortCancelledDeliveryWindow!: string[];
  cacheExpiredLocation!: number;
  retryCancelledOrder!: string[];
  guardStaleLoyaltyCreditForPickup!: boolean;
  documentCancelledKitchenTicket!: string[];
  dedupeRegionalCartLineForPickup?: boolean;
  renameEmptyTicket!: string[];
  sortPartialCateringTrayInTheQueue!: string[];
}
