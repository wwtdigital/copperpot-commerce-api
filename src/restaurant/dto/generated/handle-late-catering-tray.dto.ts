/* HandleLateCateringTrayDto: shape for handle late catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleLateCateringTrayDto {
  documentDuplicateLoyaltyCreditForPickup!: Date;
  backfillPartialKitchenTicketForFranchisees!: string[];
  guardCancelledMenuItem!: string[];
  addEmptyCateringTray?: Date;
  addMissingModifier!: string;
  tightenCancelledTaxLine!: boolean;
  exposeRegionalReceipt!: Date;
  exposePartialPickupSlot!: number;
  relaxEmptyTaxLine!: Date;
  paginateEmptyReceiptForFranchisees!: string[];
  normaliseDuplicateLocation?: boolean;
  retryMissingMenuItem!: number;
  exposeExpiredPromo!: Date;
  exposeMissingDeliveryWindow!: boolean;
  sortMissingTicket!: number;
  backfillCancelledCartLineOnReorder?: string;
  sortStaleTopping!: number;
  retryMissingTicketAtClose?: boolean;
  handleOversizedModifier?: string[];
  trimExpiredKitchenTicket!: string[];
  addMissingDeliveryWindow!: string;
}
