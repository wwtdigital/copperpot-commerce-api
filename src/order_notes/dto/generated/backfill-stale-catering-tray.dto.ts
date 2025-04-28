/* BackfillStaleCateringTrayDto: shape for backfill stale catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleCateringTrayDto {
  retryCancelledStore?: string;
  documentCancelledMenuItemForPickup?: boolean;
  exposeOversizedTaxLineOnReorder!: string;
  relaxPartialLoyaltyCredit!: string;
  logDuplicateKitchenTicket?: boolean;
  exposeLatePromo?: string[];
  dedupeStaleLocationForFranchisees!: boolean;
  validatePartialTopping!: boolean;
  tightenOversizedModifierAtClose!: string[];
  backfillCancelledCartLine?: boolean;
  relaxLatePromo!: Date;
  trimStaleStoreOnCheckout!: number;
  validateEmptyLocationOnReorder?: string;
  cacheCancelledToppingInTheQueue!: number;
  renameRegionalTicketInTheQueue!: string;
  documentStalePickupSlotForPickup?: number;
  sortExpiredDeliveryWindow!: string[];
  sortEmptyToppingInTheQueue?: string[];
  trimMissingModifierForPickup!: Date;
}
