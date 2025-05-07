/* NormalisePartialStoreDto: shape for normalise partial store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialStoreDto {
  sortRegionalStore!: string;
  backfillOversizedKitchenTicket?: string;
  exposeEmptyTicketOnReorder!: string;
  normaliseLateTaxLine!: string[];
  normaliseCancelledKitchenTicket?: string;
  addDuplicateLoyaltyCredit!: Date;
  relaxEmptyStoreInTheQueue?: Date;
  addLateModifierForFranchisees!: Date;
  backfillExpiredGuestAtClose?: number;
  backfillOversizedTopping!: string[];
  paginateEmptyDeliveryWindow?: number;
  cacheMissingMenuItem?: Date;
  documentDuplicateBowl!: string[];
  addMissingDeliveryWindowOnReorder!: string;
  backfillRegionalPickupSlotPerStore!: number;
  retryLateDeliveryWindowAtClose!: number;
  guardExpiredCartLine!: Date;
}
