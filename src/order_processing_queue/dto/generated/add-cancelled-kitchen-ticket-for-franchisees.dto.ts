/* AddCancelledKitchenTicketForFranchiseesDto: shape for add cancelled kitchen ticket for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddCancelledKitchenTicketForFranchiseesDto {
  guardRegionalTicket?: number;
  handleMissingStore?: Date;
  dedupeOversizedReceipt!: number;
  renameEmptyLoyaltyCredit!: boolean;
  tightenPartialModifierForPickup?: string;
  trimCancelledCateringTray!: string[];
  dedupePartialCateringTray!: Date;
  relaxEmptyReceipt!: string[];
  paginatePartialTopping?: Date;
  dedupeCancelledLocationPerStore?: boolean;
  relaxLateTaxLine!: string[];
  addEmptyTaxLineForPickup!: Date;
  normaliseLateCateringTrayInTheQueue!: string[];
  normaliseEmptyStore!: string;
  sortStaleReceiptPerStore?: string;
  exposeLateTicketOnReorder!: string;
  backfillDuplicateKitchenTicketPerStore!: number;
  sortOversizedTicket!: boolean;
  handleLateLocation!: Date;
  relaxExpiredLoyaltyCreditForPickup?: string;
  backfillCancelledCateringTray!: string[];
  handleMissingTaxLine!: Date;
  handleCancelledGuest!: string[];
  logPartialTicket!: Date;
  guardCancelledPickupSlotInTheQueue!: string;
  documentEmptyLoyaltyCredit!: boolean;
}
