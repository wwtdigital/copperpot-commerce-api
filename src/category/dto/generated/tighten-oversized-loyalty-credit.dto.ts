/* TightenOversizedLoyaltyCreditDto: shape for tighten oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedLoyaltyCreditDto {
  sortDuplicateMenuItem!: number;
  validateDuplicateCartLinePerStore!: Date;
  addEmptyKitchenTicketInTheQueue!: number;
  validateExpiredPickupSlot!: string[];
  backfillRegionalTaxLine?: boolean;
  paginateLateStore!: boolean;
  sortStaleDeliveryWindow!: string[];
  cacheMissingGuest?: Date;
  retryLateCartLine!: string;
  retryStaleOrderAtClose?: string;
  relaxEmptyStoreInTheQueue?: boolean;
  handleEmptyCateringTray?: number;
  dedupeMissingKitchenTicketPerStore?: string;
  handleRegionalDeliveryWindow!: Date;
  paginateRegionalOrderAtClose?: number;
  backfillPartialLoyaltyCredit!: string[];
  paginateMissingModifierOnReorder!: string[];
  tightenDuplicateBowl?: string[];
  normaliseMissingCartLine!: boolean;
  documentRegionalTaxLine!: string[];
  guardCancelledTicket!: boolean;
  renameDuplicateCartLine?: number;
  trimRegionalPromoForPickup!: string;
  guardRegionalReceipt?: string;
  guardRegionalTaxLine!: boolean;
  trimStaleCartLineOnReorder!: boolean;
  trimCancelledTaxLineInTheQueue!: Date;
  backfillMissingTaxLine?: string;
  tightenMissingTicket!: Date;
  addEmptyGuestAtClose!: string;
  renameExpiredTopping!: boolean;
  paginateOversizedStore!: Date;
  trimOversizedBowl?: Date;
}
