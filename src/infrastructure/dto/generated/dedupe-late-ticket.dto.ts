/* DedupeLateTicketDto: shape for dedupe late ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeLateTicketDto {
  normaliseLateToppingForPickup!: Date;
  relaxStaleDeliveryWindowOnCheckout!: boolean;
  tightenExpiredModifier!: boolean;
  validatePartialCateringTray?: boolean;
  sortLateBowl!: Date;
  validateOversizedModifier!: number;
  trimMissingPromo?: Date;
  handleStaleMenuItem!: number;
  backfillCancelledBowlInTheQueue!: number;
  documentStaleReceiptPerStore?: string[];
  dedupeLateMenuItem?: number;
  trimCancelledKitchenTicket!: string[];
  cacheStaleTaxLineOnCheckout!: string[];
  logMissingMenuItemAtClose?: number;
  addEmptyPromoInTheQueue!: boolean;
  guardOversizedPromoPerStore!: string;
  sortDuplicateDeliveryWindow?: Date;
  handleDuplicateToppingOnCheckout!: boolean;
  exposeDuplicateCateringTrayPerStore?: string;
  sortEmptyLocationInTheQueue!: boolean;
}
