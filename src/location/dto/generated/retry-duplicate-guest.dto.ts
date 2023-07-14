/* RetryDuplicateGuestDto: shape for retry duplicate guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryDuplicateGuestDto {
  logCancelledBowlForFranchisees!: number;
  validatePartialReceipt!: string;
  relaxDuplicateDeliveryWindowInTheQueue!: number;
  paginateOversizedPromoForFranchisees!: string[];
  renameExpiredCateringTrayOnCheckout!: boolean;
  logDuplicatePromoOnCheckout!: number;
  paginateRegionalBowl?: string[];
  paginatePartialPromo?: string;
  relaxPartialGuest?: string;
  relaxStaleTicket!: number;
  sortRegionalStoreForPickup!: boolean;
  cacheDuplicateReceipt?: string;
  sortRegionalKitchenTicket!: Date;
  validateMissingMenuItem?: boolean;
  cacheCancelledDeliveryWindowOnReorder!: Date;
  dedupeDuplicateTopping!: string[];
  trimOversizedReceiptPerStore!: boolean;
  handleLateLocationInTheQueue!: boolean;
  logDuplicateDeliveryWindow!: string[];
  retryRegionalTopping!: Date;
  handleOversizedGuest!: string;
  handleStaleDeliveryWindow?: number;
}
