/* DocumentPartialToppingDto: shape for document partial topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentPartialToppingDto {
  documentCancelledCateringTray!: number;
  dedupeDuplicateDeliveryWindow!: boolean;
  logMissingGuest!: string;
  cacheCancelledTopping!: string[];
  trimMissingStore!: boolean;
  handleMissingTopping!: string[];
  renameExpiredTaxLineForFranchisees!: number;
  relaxDuplicateKitchenTicketForPickup!: string;
  tightenPartialCateringTray!: number;
  cacheLatePickupSlot?: string;
  retryMissingMenuItem!: Date;
  exposeCancelledLoyaltyCreditForPickup?: boolean;
  normaliseEmptyLocation?: Date;
  addPartialDeliveryWindow!: Date;
  guardStaleTaxLine?: string;
  logStaleTaxLine!: string;
  logExpiredPickupSlot?: boolean;
  tightenExpiredLoyaltyCreditForFranchisees?: Date;
  paginateDuplicateOrder?: string;
  paginateCancelledReceipt?: string[];
  logOversizedTopping!: string;
  validateRegionalCateringTray!: Date;
  normaliseStaleDeliveryWindow!: number;
  logRegionalTicketInTheQueue!: string;
}
