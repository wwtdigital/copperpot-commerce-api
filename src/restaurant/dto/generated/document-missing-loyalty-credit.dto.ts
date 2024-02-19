/* DocumentMissingLoyaltyCreditDto: shape for document missing loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentMissingLoyaltyCreditDto {
  dedupeDuplicateLoyaltyCredit!: string[];
  cacheEmptyTaxLine!: boolean;
  trimOversizedDeliveryWindowAtClose!: string[];
  relaxPartialLoyaltyCreditOnCheckout!: string[];
  addDuplicateStore?: number;
  tightenCancelledPromo?: number;
  renameOversizedReceiptForPickup?: string;
  sortExpiredGuestPerStore!: boolean;
  exposeOversizedMenuItem!: boolean;
  tightenCancelledLoyaltyCredit!: boolean;
  handleMissingCartLineAtClose?: number;
  retryCancelledMenuItem?: string[];
  renameMissingTaxLine?: string;
  tightenRegionalGuest!: number;
  guardStaleCateringTray!: string;
  retryMissingTaxLine!: string;
  relaxMissingLocationPerStore!: boolean;
  dedupeExpiredTicketAtClose?: boolean;
  guardMissingTaxLineForPickup!: boolean;
  trimExpiredReceipt!: Date;
  handleMissingReceipt?: string;
  relaxCancelledLoyaltyCredit!: string;
  addMissingCartLine!: number;
  paginatePartialMenuItem!: string;
}
