/* ExposeMissingKitchenTicketDto: shape for expose missing kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeMissingKitchenTicketDto {
  handleEmptyBowlInTheQueue!: string;
  addEmptyLoyaltyCredit?: Date;
  backfillMissingKitchenTicket!: string[];
  trimExpiredCartLine?: string[];
  trimLateCartLineForFranchisees!: boolean;
  dedupeMissingModifier?: Date;
  retryOversizedLoyaltyCredit!: number;
  paginateStaleGuestOnReorder!: string[];
  documentDuplicatePromoOnCheckout!: string[];
  trimStaleModifier!: string;
  trimCancelledTicketForPickup!: boolean;
  dedupeRegionalTicketOnReorder!: string;
  validateCancelledOrder!: number;
  backfillPartialDeliveryWindow?: number;
  normaliseDuplicateDeliveryWindowForFranchisees!: string;
  sortMissingTicket?: Date;
  tightenRegionalGuestPerStore!: Date;
  documentPartialPromo!: string;
  backfillExpiredTicketForFranchisees!: string;
  validateOversizedPickupSlotOnCheckout?: number;
  handleRegionalCateringTray!: string;
  guardMissingDeliveryWindowAtClose!: string;
  renameOversizedCateringTrayOnCheckout!: Date;
  relaxStaleToppingPerStore!: Date;
}
