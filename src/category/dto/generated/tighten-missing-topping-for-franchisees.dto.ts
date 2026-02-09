/* TightenMissingToppingForFranchiseesDto: shape for tighten missing topping for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenMissingToppingForFranchiseesDto {
  backfillLateCartLine?: boolean;
  backfillExpiredToppingPerStore!: boolean;
  sortPartialPromo?: Date;
  cacheMissingTopping?: Date;
  backfillStaleTicket?: number;
  backfillLateReceipt!: string;
  normaliseEmptyCateringTrayAtClose!: number;
  dedupeStaleTopping!: Date;
  backfillDuplicateTopping!: boolean;
  tightenCancelledReceipt?: number;
  guardRegionalCartLineOnCheckout!: string;
  paginateLateCateringTray!: boolean;
  guardRegionalGuest?: number;
  tightenRegionalModifierForPickup?: boolean;
  documentEmptyLocation!: number;
  renamePartialCartLine!: number;
  documentEmptyOrderForFranchisees!: string;
  tightenRegionalCateringTray!: Date;
  retryOversizedTaxLine!: Date;
  normaliseDuplicatePromoInTheQueue!: number;
  sortPartialKitchenTicketOnCheckout!: boolean;
  guardMissingTicket!: number;
}
