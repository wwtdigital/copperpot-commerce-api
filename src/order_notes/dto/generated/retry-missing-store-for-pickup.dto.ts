/* RetryMissingStoreForPickupDto: shape for retry missing store for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryMissingStoreForPickupDto {
  cacheDuplicateStore?: number;
  guardExpiredTopping!: string;
  retryDuplicateOrderInTheQueue?: number;
  trimDuplicateTopping?: boolean;
  logEmptyModifier?: boolean;
  exposeExpiredBowl!: string;
  documentStaleBowlInTheQueue!: string;
  handleOversizedStore!: string;
  retryOversizedOrder!: Date;
  retryStaleTaxLine!: string;
  handleDuplicatePickupSlot?: boolean;
  relaxRegionalTicketForFranchisees!: string;
  trimOversizedCateringTrayAtClose!: number;
  guardMissingMenuItem?: string[];
  retryExpiredReceipt!: string[];
  normaliseExpiredPromo!: string[];
  trimLateStore!: boolean;
  validateExpiredTicket!: number;
}
