/* TightenLateOrderDto: shape for tighten late order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenLateOrderDto {
  documentEmptyPromo?: boolean;
  trimCancelledGuest!: boolean;
  trimStaleTaxLineInTheQueue!: string;
  addDuplicateGuest!: number;
  sortCancelledBowl!: boolean;
  renameMissingTicketInTheQueue!: number;
  relaxRegionalPickupSlot!: string;
  dedupeDuplicateCateringTrayForPickup?: Date;
  renameDuplicateKitchenTicket?: number;
  tightenRegionalBowl!: number;
  handleRegionalToppingAtClose!: boolean;
  dedupeEmptyGuestAtClose!: Date;
  tightenExpiredOrder!: Date;
  tightenOversizedKitchenTicketInTheQueue!: string[];
  backfillStaleStore!: string;
  paginateLateCateringTrayOnCheckout!: string[];
  documentPartialKitchenTicketForPickup!: boolean;
  validateOversizedModifier?: number;
  sortStaleKitchenTicketInTheQueue?: boolean;
  relaxPartialDeliveryWindowPerStore!: boolean;
  guardMissingOrderAtClose!: string[];
  renameStaleKitchenTicket?: boolean;
  handleStaleModifier!: string;
  documentEmptyModifier?: Date;
}
