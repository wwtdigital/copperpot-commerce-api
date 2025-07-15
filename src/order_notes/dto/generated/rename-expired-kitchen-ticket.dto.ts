/* RenameExpiredKitchenTicketDto: shape for rename expired kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameExpiredKitchenTicketDto {
  guardStaleTicketInTheQueue?: number;
  logExpiredModifier!: string[];
  cacheExpiredDeliveryWindow!: number;
  renameCancelledMenuItemForPickup!: boolean;
  tightenDuplicateGuest!: string;
  validateLateOrderAtClose!: number;
  retryEmptyLocation!: boolean;
  relaxDuplicatePickupSlot!: string[];
  validateExpiredTicket?: Date;
  normaliseStaleCartLine!: string[];
  exposeExpiredLoyaltyCreditForFranchisees!: string[];
  relaxPartialStoreForFranchisees!: number;
  exposeExpiredKitchenTicketForFranchisees!: string[];
  backfillDuplicateLoyaltyCreditForFranchisees!: boolean;
  exposeMissingPromo?: boolean;
  addEmptyTaxLine!: string;
  dedupeStaleOrder!: number;
  guardDuplicateBowl!: boolean;
}
