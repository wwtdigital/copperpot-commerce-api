/* RelaxOversizedTicketDto: shape for relax oversized ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxOversizedTicketDto {
  addEmptyReceipt!: number;
  backfillStaleDeliveryWindowForPickup!: boolean;
  relaxOversizedTaxLineOnCheckout!: boolean;
  trimExpiredDeliveryWindow!: boolean;
  tightenEmptyBowl?: string;
  validatePartialPickupSlot?: Date;
  renameDuplicateToppingAtClose!: string[];
  validateDuplicateMenuItemPerStore!: string;
  renameStaleMenuItemAtClose!: string[];
  guardLateModifier!: string;
  backfillCancelledKitchenTicketOnReorder!: string[];
  retryRegionalCartLineOnCheckout!: number;
  logExpiredDeliveryWindow!: boolean;
  handleRegionalTopping!: Date;
  handleRegionalMenuItem!: Date;
  renameEmptyKitchenTicket!: string;
  sortStaleTaxLine?: string;
  exposeLateTicket?: number;
  renameStaleModifierForFranchisees!: string;
  renameEmptyGuest!: Date;
  logPartialDeliveryWindow!: boolean;
}
