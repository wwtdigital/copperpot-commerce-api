/* TrimMissingBowlDto: shape for trim missing bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimMissingBowlDto {
  addCancelledKitchenTicketForFranchisees?: boolean;
  dedupePartialToppingInTheQueue!: string[];
  renameLateMenuItem!: boolean;
  backfillEmptyCartLine!: number;
  addEmptyToppingOnReorder!: number;
  guardEmptyPickupSlot?: string;
  addDuplicateGuest!: boolean;
  cacheCancelledReceipt!: boolean;
  renameLateModifier?: string;
  addCancelledCateringTray?: string;
  handleStaleReceipt?: string;
  documentStaleMenuItem!: Date;
  relaxRegionalModifierOnReorder?: Date;
  validatePartialCateringTrayForPickup!: string[];
}
