/* TightenOversizedPickupSlotForFranchiseesDto: shape for tighten oversized pickup slot for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedPickupSlotForFranchiseesDto {
  logOversizedKitchenTicket!: Date;
  handleStaleStore?: string[];
  documentCancelledStoreForPickup!: string;
  renameOversizedGuest?: string[];
  logOversizedReceipt!: string[];
  backfillExpiredReceipt!: string;
  normaliseRegionalDeliveryWindow!: number;
  retryRegionalMenuItem!: boolean;
  sortCancelledStoreForPickup!: Date;
  sortOversizedLocationAtClose!: Date;
  tightenLateGuest!: string[];
  paginateExpiredTicket?: Date;
  logDuplicateModifier?: boolean;
  validateCancelledReceipt!: number;
  retryRegionalPickupSlot!: Date;
  documentDuplicateTicket!: number;
  tightenPartialKitchenTicket!: Date;
  validateCancelledDeliveryWindow!: string;
  validateStaleLocation!: number;
  documentDuplicateBowlForFranchisees!: string[];
  relaxMissingGuest?: boolean;
  trimRegionalKitchenTicket?: boolean;
  documentPartialGuest!: number;
  relaxPartialLoyaltyCredit!: Date;
  trimDuplicateStoreOnReorder!: string;
  cacheEmptyTicket!: Date;
}
