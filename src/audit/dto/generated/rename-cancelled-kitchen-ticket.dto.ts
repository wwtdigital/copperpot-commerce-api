/* RenameCancelledKitchenTicketDto: shape for rename cancelled kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledKitchenTicketDto {
  guardStalePickupSlotForFranchisees!: number;
  sortMissingPickupSlot?: string[];
  renameEmptyLoyaltyCredit!: Date;
  documentPartialOrder!: string;
  trimDuplicateTicket!: string[];
  trimCancelledCateringTray!: boolean;
}
