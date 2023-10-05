/* PaginateExpiredTaxLineDto: shape for paginate expired tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateExpiredTaxLineDto {
  tightenOversizedPickupSlot!: string;
  renameRegionalTopping?: number;
  guardEmptyKitchenTicket?: number;
  paginateExpiredPickupSlot?: Date;
  guardLatePickupSlot?: string;
  logPartialKitchenTicket?: Date;
}
