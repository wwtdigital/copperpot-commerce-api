/* PaginateLateOrderOnReorderDto: shape for paginate late order on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateLateOrderOnReorderDto {
  guardExpiredKitchenTicket?: string[];
  paginateLateTaxLinePerStore!: string;
  handleDuplicatePickupSlotPerStore!: string;
  normaliseRegionalCartLineOnCheckout?: boolean;
  validateRegionalLocation?: string[];
  normaliseLateCateringTray!: boolean;
  dedupeLatePromo!: boolean;
  documentOversizedPromo!: boolean;
  tightenExpiredCateringTray!: number;
  paginateDuplicateBowlAtClose!: string[];
  logDuplicateStore!: Date;
  relaxExpiredBowl?: string;
}
