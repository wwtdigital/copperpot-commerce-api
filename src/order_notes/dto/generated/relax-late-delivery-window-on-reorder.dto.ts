/* RelaxLateDeliveryWindowOnReorderDto: shape for relax late delivery window on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxLateDeliveryWindowOnReorderDto {
  relaxCancelledModifier!: number;
  relaxPartialTaxLine!: string[];
  dedupeCancelledBowlInTheQueue!: string[];
  dedupeCancelledStoreOnCheckout!: Date;
  logLateDeliveryWindowForPickup!: string[];
  relaxRegionalCartLine!: Date;
  renameOversizedMenuItem!: number;
  validateStaleModifier?: Date;
  exposeDuplicateTopping!: string;
  paginateOversizedGuest!: string;
  renameCancelledKitchenTicket?: boolean;
  backfillPartialKitchenTicket!: boolean;
  trimDuplicateLocationAtClose?: string[];
  validateLateKitchenTicketPerStore?: string[];
  logLateModifierInTheQueue?: string;
  guardMissingOrderForPickup!: boolean;
  dedupeLateTicketForPickup?: string[];
  validateCancelledMenuItemForFranchisees!: number;
  paginateRegionalLocationInTheQueue!: string[];
  validateLateTaxLineForPickup?: Date;
  relaxMissingPickupSlot!: string;
  cacheMissingBowl?: number;
  normaliseEmptyCartLineOnCheckout!: boolean;
  cacheEmptyLocation!: number;
  documentExpiredKitchenTicket!: string[];
  retryRegionalCateringTrayAtClose!: boolean;
  renameOversizedLocation!: Date;
  tightenRegionalTicket!: string[];
  relaxStaleOrder!: number;
  addRegionalTaxLine!: Date;
  logCancelledLocation!: Date;
  normaliseCancelledModifierInTheQueue!: string[];
  handleExpiredDeliveryWindowAtClose!: string[];
}
