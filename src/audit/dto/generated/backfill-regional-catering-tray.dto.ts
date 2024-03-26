/* BackfillRegionalCateringTrayDto: shape for backfill regional catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillRegionalCateringTrayDto {
  trimRegionalReceiptForPickup?: number;
  backfillDuplicateModifierForFranchisees!: Date;
  sortLateLocationForFranchisees!: string[];
  tightenDuplicateMenuItemForPickup!: Date;
  backfillRegionalTopping!: string[];
  relaxLateToppingOnCheckout!: Date;
  normaliseExpiredLocationForFranchisees!: boolean;
  logLatePromoOnCheckout!: string;
  documentRegionalReceiptOnReorder!: number;
  cacheExpiredCartLineAtClose!: string[];
  backfillStaleLocation?: Date;
  logDuplicateCateringTrayInTheQueue!: Date;
  exposeOversizedCateringTray?: Date;
}
