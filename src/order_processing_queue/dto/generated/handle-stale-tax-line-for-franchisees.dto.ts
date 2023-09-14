/* HandleStaleTaxLineForFranchiseesDto: shape for handle stale tax line for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleStaleTaxLineForFranchiseesDto {
  documentStaleTaxLineAtClose?: number;
  renameMissingTopping!: boolean;
  tightenMissingTaxLinePerStore!: string[];
  renameMissingLoyaltyCredit!: string;
  dedupeLateLoyaltyCreditForPickup!: string;
  normaliseStaleToppingPerStore!: Date;
  logPartialModifier?: boolean;
  paginateMissingGuestOnCheckout!: boolean;
  renameStaleKitchenTicket!: Date;
  addExpiredMenuItemForPickup?: Date;
  logPartialGuest!: string;
  dedupeRegionalStoreOnReorder?: string;
  exposeLatePickupSlot?: Date;
  normaliseExpiredPromoForFranchisees?: Date;
  documentDuplicateGuest!: number;
  exposeMissingTicket!: boolean;
  tightenMissingCartLineAtClose?: Date;
}
