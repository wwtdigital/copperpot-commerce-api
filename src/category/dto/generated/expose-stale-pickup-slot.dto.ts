/* ExposeStalePickupSlotDto: shape for expose stale pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeStalePickupSlotDto {
  tightenCancelledTaxLine!: number;
  normaliseLateTaxLinePerStore?: Date;
  renameDuplicateGuest!: number;
  renameRegionalGuest?: boolean;
  trimStaleTopping?: boolean;
  handleRegionalCateringTray?: boolean;
  sortOversizedTicketForFranchisees?: string;
  tightenRegionalStore!: string[];
  relaxStaleToppingForPickup?: number;
  renameRegionalLoyaltyCredit?: Date;
}
