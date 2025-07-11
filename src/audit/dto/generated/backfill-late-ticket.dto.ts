/* BackfillLateTicketDto: shape for backfill late ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillLateTicketDto {
  relaxPartialMenuItem!: Date;
  handleEmptyToppingForFranchisees!: string[];
  logStaleDeliveryWindow?: boolean;
  guardExpiredLocation?: number;
  addOversizedTopping!: boolean;
  handleStaleToppingInTheQueue?: string[];
  sortRegionalTicket!: string[];
  paginateStalePromoForFranchisees!: string[];
  retryRegionalModifier!: boolean;
  addLateLocation!: Date;
  guardCancelledTicket!: boolean;
  normaliseLateDeliveryWindow!: boolean;
  addEmptyPromoAtClose!: string[];
  retryStaleMenuItem?: number;
  handleMissingDeliveryWindowPerStore!: Date;
  validateLateMenuItemForFranchisees?: string;
  documentDuplicateBowl?: string[];
  relaxPartialLocation?: string;
  retryEmptyMenuItemForPickup!: string[];
  addEmptyPromo!: Date;
  exposeDuplicateLocation!: Date;
  backfillLatePromo!: string[];
  documentStalePickupSlot!: boolean;
  sortPartialGuest!: boolean;
  handleDuplicateOrder?: boolean;
  backfillOversizedDeliveryWindow!: number;
}
