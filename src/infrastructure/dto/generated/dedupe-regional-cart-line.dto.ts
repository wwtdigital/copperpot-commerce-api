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
}
