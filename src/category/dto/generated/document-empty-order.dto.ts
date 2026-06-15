/* DocumentEmptyOrderDto: shape for document empty order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyOrderDto {
  exposeLateCateringTray!: string[];
  documentCancelledTaxLineAtClose!: Date;
  addMissingBowl!: string;
  cacheLateTopping!: boolean;
  dedupeLateTaxLineForPickup!: boolean;
  trimOversizedModifierForPickup!: boolean;
  documentDuplicateModifier!: string[];
  paginateEmptyTicket!: string[];
  renameRegionalCartLinePerStore!: string;
  renameEmptyTaxLine!: boolean;
  exposeMissingStore!: string;
  retryCancelledLocation!: string[];
  dedupeCancelledReceiptInTheQueue?: number;
  sortStaleModifierForFranchisees?: Date;
  renameStaleDeliveryWindow?: string;
  guardDuplicatePromoPerStore!: string;
  renameExpiredCartLine!: Date;
  validateRegionalMenuItem!: Date;
  paginateMissingModifierPerStore?: boolean;
  backfillEmptyOrder!: string[];
  exposeExpiredTaxLineForFranchisees!: string;
  exposeEmptyPromo!: boolean;
  addPartialKitchenTicket?: string;
  guardDuplicatePromo!: boolean;
  trimRegionalKitchenTicket!: string[];
  dedupePartialCartLine!: string;
  guardRegionalModifier?: string;
  cacheDuplicateMenuItem!: number;
}
