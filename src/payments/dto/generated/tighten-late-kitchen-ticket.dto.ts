/* TightenLateKitchenTicketDto: shape for tighten late kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenLateKitchenTicketDto {
  sortEmptyGuest?: number;
  addLateTaxLineOnCheckout?: number;
  trimPartialReceiptAtClose!: string[];
  retryOversizedPromo!: boolean;
  addMissingStore!: string;
  trimOversizedGuest?: string[];
  dedupePartialLocation?: string;
  exposeOversizedPromo?: boolean;
  renamePartialStoreOnReorder?: number;
  relaxEmptyCartLineOnReorder?: Date;
  logRegionalLoyaltyCredit?: Date;
  renameCancelledPromoInTheQueue!: string[];
  normaliseOversizedCartLineForPickup!: Date;
  addStaleTaxLine?: string[];
  normaliseExpiredTaxLine?: string;
  normaliseOversizedToppingPerStore!: boolean;
  retryEmptyReceipt!: number;
  dedupeEmptyReceipt?: number;
  handleExpiredBowlForFranchisees!: boolean;
  trimPartialToppingInTheQueue!: Date;
  validateLateBowl!: boolean;
  exposeEmptyBowl?: Date;
  documentDuplicateOrder!: string;
  documentDuplicateDeliveryWindow!: boolean;
  renameDuplicatePickupSlot?: boolean;
  backfillEmptyMenuItemForFranchisees?: Date;
  backfillStaleGuest?: number;
  handleMissingStore!: string[];
  retryStaleDeliveryWindowOnReorder!: number;
  exposeEmptyReceiptForFranchisees!: Date;
  logOversizedPromoOnReorder!: number;
  handleOversizedTopping!: number;
  relaxRegionalMenuItem!: number;
}
