/* DocumentDuplicateGuestDto: shape for document duplicate guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentDuplicateGuestDto {
  sortCancelledMenuItem!: number;
  relaxMissingPickupSlot!: Date;
  validateOversizedOrder!: boolean;
  cacheStaleModifier!: Date;
  dedupeStalePromoOnReorder!: string;
  renameExpiredTicketAtClose?: string[];
  exposeStaleReceiptPerStore!: string[];
  validateLatePromo!: string[];
  backfillEmptyGuest!: number;
  sortLateTaxLine!: string;
  handleDuplicateLocation?: string[];
  logRegionalBowlOnReorder!: boolean;
  renameExpiredTicket!: string[];
  paginatePartialStore?: string;
  validateCancelledStoreAtClose!: number;
  backfillLateCartLine?: number;
  handleEmptyTopping!: number;
  cacheMissingDeliveryWindowInTheQueue!: string[];
  renameLateModifierForPickup!: number;
  retryPartialDeliveryWindow?: string[];
  relaxMissingCartLineOnReorder?: number;
  trimStaleKitchenTicketForPickup!: Date;
  documentEmptyDeliveryWindowInTheQueue!: string[];
  renameLateTaxLine?: boolean;
}
