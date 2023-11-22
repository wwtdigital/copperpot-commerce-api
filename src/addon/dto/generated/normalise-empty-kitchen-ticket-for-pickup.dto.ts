/* NormaliseEmptyKitchenTicketForPickupDto: shape for normalise empty kitchen ticket for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseEmptyKitchenTicketForPickupDto {
  dedupeCancelledTopping!: string[];
  documentEmptyCartLinePerStore?: number;
  documentLateLocation!: Date;
  paginateExpiredDeliveryWindowForFranchisees?: Date;
}
