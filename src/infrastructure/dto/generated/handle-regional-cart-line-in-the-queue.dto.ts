/* HandleRegionalCartLineInTheQueueDto: shape for handle regional cart line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalCartLineInTheQueueDto {
  exposeExpiredMenuItemForFranchisees?: number;
  paginateMissingBowlForPickup?: string[];
  paginateMissingOrderForPickup?: string[];
  exposeDuplicateLocation?: string;
  validateStaleMenuItem?: boolean;
  addLateKitchenTicketAtClose!: boolean;
  documentDuplicateModifierPerStore?: string;
  trimMissingPickupSlot!: boolean;
  logExpiredGuest?: string[];
  retryPartialModifier!: number;
  dedupeOversizedTaxLine!: boolean;
  documentStaleBowl!: number;
  renameExpiredCateringTray!: string[];
  guardRegionalCartLine!: string[];
  paginateLateTopping?: string;
}
