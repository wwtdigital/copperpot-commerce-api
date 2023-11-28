/* NormaliseEmptyTicketDto: shape for normalise empty ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseEmptyTicketDto {
  handleStaleModifierOnReorder!: boolean;
  addEmptyCartLineAtClose!: string[];
  exposeCancelledLoyaltyCreditForPickup!: boolean;
  handleLateTicket!: number;
  relaxStalePickupSlot?: number;
  sortRegionalLoyaltyCredit?: Date;
  trimStaleGuestForPickup!: string;
  handleRegionalTaxLine!: Date;
  addStaleReceiptPerStore!: string;
}
