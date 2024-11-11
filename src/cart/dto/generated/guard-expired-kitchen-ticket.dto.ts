/* GuardExpiredKitchenTicketDto: shape for guard expired kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardExpiredKitchenTicketDto {
  validateLateStoreForPickup!: number;
  validateOversizedStoreOnCheckout!: string[];
  relaxOversizedTicketOnReorder?: string[];
  backfillDuplicateGuest?: boolean;
  normaliseLateDeliveryWindow!: string;
  trimPartialTaxLine?: string;
  normaliseOversizedLocation!: string;
  paginateCancelledOrder?: string[];
  relaxMissingToppingOnCheckout!: string[];
  sortMissingTaxLine!: string[];
  retryLateTicketOnCheckout?: string;
  addRegionalCateringTrayPerStore!: string;
  renameCancelledPickupSlotInTheQueue!: string;
  renameExpiredCartLine?: number;
}
