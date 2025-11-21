/* DedupeExpiredCartLineInTheQueueDto: shape for dedupe expired cart line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeExpiredCartLineInTheQueueDto {
  guardMissingStorePerStore!: string[];
  tightenOversizedCateringTray!: string;
  renameStaleKitchenTicket?: Date;
  dedupeLateTicketOnReorder?: number;
  dedupeLateTaxLinePerStore!: string;
  guardEmptyKitchenTicket!: string[];
  addOversizedOrderOnCheckout!: Date;
  dedupeStaleBowl!: number;
  normaliseEmptyPromo?: boolean;
  cacheOversizedReceiptOnCheckout!: number;
  sortRegionalCartLine!: boolean;
  sortLateGuest?: boolean;
  cacheRegionalGuestAtClose!: boolean;
  sortRegionalToppingOnReorder!: boolean;
  exposeCancelledCartLine!: boolean;
  exposePartialPickupSlot!: boolean;
  validateLateBowlInTheQueue!: boolean;
  exposeStaleModifier?: string[];
  handleCancelledKitchenTicket!: number;
  trimExpiredLocation!: boolean;
  backfillEmptyToppingOnCheckout!: number;
  documentOversizedKitchenTicketAtClose?: string;
  backfillLateCartLineForFranchisees?: string[];
  renameStaleGuestOnReorder?: string[];
}
