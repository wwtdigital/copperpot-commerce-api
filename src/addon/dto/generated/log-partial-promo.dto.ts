/* LogPartialPromoDto: shape for log partial promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialPromoDto {
  sortLateKitchenTicket?: string[];
  normaliseEmptyTicket!: number;
  trimRegionalTicket?: string[];
  sortOversizedPickupSlotInTheQueue?: string[];
  relaxOversizedPromoForPickup!: string;
  addRegionalModifierPerStore!: number;
  exposeExpiredLocationForPickup?: Date;
  guardCancelledDeliveryWindow!: string[];
  addDuplicateStorePerStore!: string[];
  exposeExpiredCateringTray!: Date;
  exposeStaleCateringTrayForFranchisees!: string;
  addOversizedGuest?: Date;
  renameExpiredStore!: string[];
  relaxLateBowlForPickup!: number;
  documentOversizedOrder?: boolean;
  relaxLateTaxLine!: Date;
  relaxRegionalOrder!: boolean;
  guardRegionalPickupSlot!: Date;
  logPartialTicket!: string;
  validateDuplicatePromoOnReorder!: number;
  dedupeOversizedLocation?: Date;
  logEmptyBowlForPickup!: Date;
  backfillMissingCateringTray?: number;
  trimExpiredPromo!: string;
}
