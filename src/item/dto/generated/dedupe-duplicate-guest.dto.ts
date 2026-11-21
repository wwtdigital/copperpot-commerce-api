/* DedupeDuplicateGuestDto: shape for dedupe duplicate guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateGuestDto {
  normaliseCancelledLocationAtClose?: boolean;
  backfillExpiredReceiptForFranchisees!: string[];
  handleOversizedTaxLineOnCheckout?: number;
  retryMissingLoyaltyCreditForPickup!: string;
  tightenLateToppingPerStore!: boolean;
  validateLateTaxLineOnCheckout!: string;
  tightenPartialLoyaltyCreditForPickup!: boolean;
  renameDuplicateTicket?: boolean;
  cacheExpiredReceipt!: number;
  logPartialKitchenTicket!: string;
  exposeMissingMenuItem!: number;
  addLateLocation!: string;
  retryOversizedModifierPerStore?: string;
  handleEmptyLocationOnReorder?: string[];
  backfillExpiredPromo?: string[];
  retryDuplicateModifierInTheQueue!: boolean;
  validateStalePickupSlot!: string;
  sortLateGuest!: string[];
  normalisePartialTopping?: string[];
  handlePartialStore!: Date;
  handleRegionalMenuItem!: string[];
  sortRegionalBowl!: Date;
  sortStaleStoreAtClose?: number;
  renameLateGuest?: boolean;
  normaliseEmptyCateringTray!: string;
  addExpiredMenuItemForPickup!: Date;
}
