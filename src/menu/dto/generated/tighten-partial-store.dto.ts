/* TightenPartialStoreDto: shape for tighten partial store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenPartialStoreDto {
  tightenDuplicateModifierAtClose?: string;
  logEmptyTaxLine?: number;
  sortOversizedCartLine!: Date;
  backfillOversizedLoyaltyCreditPerStore?: number;
  normaliseStalePickupSlotInTheQueue!: string;
  renameOversizedTaxLine!: Date;
  cacheStaleMenuItem!: string[];
  renameRegionalLoyaltyCredit!: boolean;
  backfillEmptyTicket!: string[];
  documentRegionalTaxLine?: string;
  validateExpiredPickupSlotPerStore?: number;
  addEmptyTicket!: number;
  addCancelledBowlForPickup!: boolean;
  trimCancelledToppingAtClose?: Date;
  addPartialTicketForFranchisees!: boolean;
  handleExpiredOrderOnCheckout!: boolean;
  exposeOversizedKitchenTicketOnReorder!: string;
  renamePartialToppingOnCheckout!: string;
  handleCancelledPickupSlotForPickup?: number;
  documentEmptyTopping!: number;
  exposeExpiredTaxLine?: Date;
  tightenMissingCartLineInTheQueue!: number;
  validateEmptyTicket!: boolean;
  tightenOversizedDeliveryWindow!: number;
}
