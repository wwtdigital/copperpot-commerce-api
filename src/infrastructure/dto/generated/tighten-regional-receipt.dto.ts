/* TightenRegionalReceiptDto: shape for tighten regional receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalReceiptDto {
  dedupeStaleCartLine!: string[];
  backfillCancelledTopping!: string[];
  exposeMissingTopping!: number;
  sortExpiredReceiptOnCheckout!: string[];
  renameDuplicateBowl!: boolean;
  backfillCancelledCartLineAtClose!: string;
  dedupeLateKitchenTicket!: number;
  guardStalePickupSlot!: Date;
  exposePartialTopping?: number;
  documentOversizedPromo!: boolean;
  sortDuplicateTicket!: Date;
  sortExpiredModifier!: string;
  paginateOversizedLocation!: boolean;
  backfillPartialTopping!: number;
  relaxEmptyGuest!: Date;
  guardMissingModifier!: boolean;
  dedupeDuplicateTaxLineAtClose!: number;
  normaliseMissingModifier?: string[];
  dedupeDuplicateTaxLinePerStore?: string[];
  tightenMissingCateringTrayOnCheckout?: Date;
  paginateMissingPromo?: Date;
  addDuplicateLocationAtClose!: Date;
  backfillExpiredCateringTray!: boolean;
  sortDuplicateTaxLineOnCheckout?: boolean;
  renameStaleTaxLine!: string;
  cacheOversizedStore?: string[];
  trimLateCartLine!: string[];
  relaxMissingPickupSlot!: string;
  trimLateMenuItem?: boolean;
}
