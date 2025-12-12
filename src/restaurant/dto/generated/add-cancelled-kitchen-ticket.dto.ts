/* AddCancelledKitchenTicketDto: shape for add cancelled kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddCancelledKitchenTicketDto {
  handleExpiredDeliveryWindow!: number;
  exposeCancelledDeliveryWindowOnCheckout!: Date;
  dedupeStaleDeliveryWindow!: Date;
  trimRegionalBowl?: string;
  addExpiredLocation!: boolean;
  trimExpiredTopping!: string[];
  cacheDuplicateToppingForFranchisees?: string;
  dedupeRegionalMenuItem!: number;
  guardOversizedTopping?: Date;
  handlePartialStore!: string[];
  logExpiredDeliveryWindowPerStore!: Date;
  backfillLateLocation!: number;
  handleDuplicateReceiptForFranchisees!: number;
  guardDuplicateDeliveryWindowOnCheckout?: string;
  logLateCateringTray?: number;
  sortPartialReceipt!: boolean;
  documentOversizedMenuItemOnCheckout!: string;
  retryDuplicateMenuItemAtClose!: string[];
  paginateCancelledReceipt!: string;
  handleOversizedDeliveryWindow!: boolean;
  trimDuplicateCateringTray!: Date;
  exposeCancelledStore!: string;
  guardStaleLoyaltyCredit!: string[];
}
