/* DocumentMissingKitchenTicketDto: shape for document missing kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentMissingKitchenTicketDto {
  addMissingStoreOnCheckout?: string;
  tightenMissingReceipt?: string;
  handleDuplicateCateringTray!: Date;
  retryLateOrderForFranchisees!: string[];
  logEmptyTicket!: string;
  cacheCancelledTaxLine!: number;
  normaliseEmptyBowl!: number;
  tightenDuplicateLocationAtClose!: Date;
  addLateLocationOnReorder?: boolean;
  addStaleBowl!: boolean;
  handleMissingKitchenTicket!: number;
  exposeExpiredStore!: boolean;
  retryExpiredTicketOnCheckout!: number;
  paginateRegionalStore!: number;
  retryStaleLoyaltyCredit!: boolean;
  documentLateDeliveryWindow?: Date;
  renameEmptyCateringTray!: boolean;
  handleStalePromo!: string;
  cacheCancelledCartLine!: string[];
  cacheCancelledModifier?: boolean;
  normaliseStaleCateringTray?: number;
  addStaleBowlAtClose!: Date;
  renameCancelledLoyaltyCredit!: Date;
  renamePartialBowl!: number;
  relaxCancelledReceipt?: string[];
  sortMissingTaxLinePerStore?: string[];
  relaxDuplicateStoreOnCheckout!: number;
  normaliseMissingMenuItem!: number;
  backfillRegionalMenuItem!: string[];
  relaxExpiredLoyaltyCreditOnReorder!: string[];
  handleEmptyBowl!: string;
  exposeExpiredPickupSlot?: Date;
  logEmptyPickupSlotInTheQueue!: string[];
  validateLateGuestOnReorder!: Date;
}
