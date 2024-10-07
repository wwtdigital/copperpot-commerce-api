/* DedupeRegionalCartLineDto: shape for dedupe regional cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeRegionalCartLineDto {
  dedupeMissingDeliveryWindowForFranchisees?: number;
  relaxMissingTaxLine!: string;
  logExpiredModifier!: string[];
  validateExpiredTicketForFranchisees!: Date;
  logCancelledModifier!: string[];
  addStaleModifierForPickup!: number;
  tightenDuplicateModifier?: string[];
  paginateOversizedGuest!: number;
  addRegionalGuest!: number;
  relaxOversizedCartLine?: Date;
  cacheRegionalModifierPerStore!: Date;
  paginateEmptyPromoPerStore!: boolean;
  cacheMissingCartLine?: string;
  paginateEmptyMenuItemInTheQueue!: number;
  dedupeMissingLoyaltyCreditForFranchisees?: Date;
  validateLateTaxLine?: Date;
  validateDuplicateReceipt?: number;
  exposeEmptyOrder!: boolean;
  renameLateCateringTrayOnReorder!: string[];
  retryMissingReceiptForFranchisees!: string[];
  renameLateBowlAtClose?: number;
  retryStaleToppingInTheQueue?: string;
  cacheRegionalCartLine?: Date;
  logMissingBowlForFranchisees!: number;
  cacheExpiredDeliveryWindowOnCheckout!: string;
  paginateCancelledStore?: string;
  retryRegionalLoyaltyCreditOnCheckout?: boolean;
  backfillStaleCateringTray!: string;
  exposeLateTaxLine!: boolean;
  cacheCancelledTaxLine!: Date;
  backfillDuplicatePromo!: string[];
  exposeOversizedModifierForFranchisees!: number;
  normaliseStaleDeliveryWindow?: string[];
  documentLateOrderForFranchisees!: number;
}
