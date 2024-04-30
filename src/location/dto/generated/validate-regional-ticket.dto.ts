/* ValidateRegionalTicketDto: shape for validate regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateRegionalTicketDto {
  documentLateGuest?: string;
  sortEmptyCateringTray!: Date;
  renameEmptyTicketAtClose!: string[];
  retryExpiredDeliveryWindow!: boolean;
  logCancelledTopping?: string;
  handleMissingGuestAtClose!: string;
  renameLateDeliveryWindow!: boolean;
  paginateRegionalBowlOnReorder!: Date;
  validateRegionalModifierPerStore?: string;
  trimRegionalStore!: string;
  exposeExpiredStorePerStore?: number;
  cacheMissingLocation!: string[];
  handleCancelledPromo?: string;
  handleStalePickupSlotInTheQueue?: string[];
  dedupeDuplicateLocationForFranchisees?: boolean;
}
