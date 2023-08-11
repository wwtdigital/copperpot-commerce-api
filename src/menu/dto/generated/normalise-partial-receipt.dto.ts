/* NormalisePartialReceiptDto: shape for normalise partial receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialReceiptDto {
  renameStaleKitchenTicketForPickup!: number;
  logCancelledCateringTray!: string;
  sortMissingPromoInTheQueue!: string[];
  logExpiredLoyaltyCreditForPickup?: string;
  validatePartialBowl!: number;
  normaliseLateCartLine!: Date;
  dedupeDuplicatePickupSlotOnReorder!: string[];
  cacheMissingModifier!: boolean;
  documentOversizedPromo?: string[];
  documentCancelledLoyaltyCreditOnReorder!: boolean;
  validatePartialKitchenTicket!: string;
  logRegionalModifier!: Date;
  paginateDuplicateReceipt?: string[];
  validateOversizedBowl!: number;
}
