/* TrimRegionalOrderOnReorderDto: shape for trim regional order on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimRegionalOrderOnReorderDto {
  exposeExpiredTopping!: string[];
  guardOversizedBowl!: string[];
  dedupeExpiredOrderInTheQueue!: string[];
  guardPartialKitchenTicket!: string[];
  documentLateModifier?: boolean;
  dedupeRegionalCateringTray?: string;
  addOversizedLocation!: string[];
  sortPartialStoreOnCheckout?: number;
  dedupeExpiredCartLine!: boolean;
  backfillCancelledStore?: number;
  relaxLateTaxLine?: string;
  paginateRegionalStore?: string[];
  backfillEmptyLoyaltyCredit!: string;
  relaxOversizedLocation?: string[];
  validateEmptyModifier?: string[];
  tightenCancelledKitchenTicketInTheQueue!: boolean;
  paginateLateKitchenTicket!: Date;
  cacheDuplicateOrder!: boolean;
  handleDuplicateLocation!: number;
  retryLateReceipt?: boolean;
  exposePartialCartLine!: Date;
  handleDuplicateBowlInTheQueue!: Date;
  documentCancelledModifierForFranchisees?: boolean;
  addStaleMenuItem!: string[];
  renameStaleToppingForPickup!: string[];
  normalisePartialLocation!: string;
  retryPartialLocation!: string[];
  documentCancelledLoyaltyCredit!: string;
  addOversizedStoreInTheQueue!: boolean;
}
