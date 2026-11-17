/* NormalisePartialOrderPerStoreDto: shape for normalise partial order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialOrderPerStoreDto {
  normaliseStaleDeliveryWindow?: string;
  sortCancelledDeliveryWindow?: boolean;
  normaliseRegionalPromoOnCheckout!: Date;
  guardEmptyLoyaltyCredit!: string;
  addExpiredMenuItem?: Date;
  documentPartialPickupSlot?: string[];
  paginateRegionalLocation?: number;
  documentMissingLocationPerStore!: string[];
  renameStaleBowl!: boolean;
  validateRegionalToppingOnReorder!: number;
  cacheDuplicateToppingForPickup?: number;
  validateMissingTicket!: string[];
}
