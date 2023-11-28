/* GuardDuplicateTaxLineAtCloseDto: shape for guard duplicate tax line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardDuplicateTaxLineAtCloseDto {
  dedupeCancelledLoyaltyCredit?: number;
  validateStaleLocationAtClose?: boolean;
  logExpiredTaxLineOnReorder!: string[];
  addMissingCartLine!: number;
  retryDuplicatePickupSlot!: boolean;
  exposeOversizedKitchenTicketForPickup!: string[];
  relaxLatePromo!: Date;
  validateStaleStore?: string;
  relaxDuplicateModifier!: string;
  logMissingTicket!: Date;
  cacheCancelledModifierForFranchisees!: boolean;
  guardStaleMenuItem?: string;
  handleEmptyPickupSlot?: number;
  addRegionalMenuItem!: string;
  addPartialLoyaltyCreditAtClose?: string;
  exposeLateCartLine?: number;
}
