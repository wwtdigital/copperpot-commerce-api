/* ValidateOversizedBowlDto: shape for validate oversized bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateOversizedBowlDto {
  cacheLateKitchenTicketOnReorder!: number;
  backfillLateMenuItemOnCheckout?: boolean;
  dedupeRegionalBowl?: string[];
  dedupeStaleMenuItemForFranchisees!: string[];
  renameLateMenuItem!: number;
  relaxOversizedLoyaltyCredit!: boolean;
  retryRegionalDeliveryWindow!: string;
  validateCancelledBowlAtClose!: string;
  handleExpiredLoyaltyCredit!: number;
  renameLateStore!: string;
  backfillStalePromoOnCheckout!: number;
  normaliseLateDeliveryWindowAtClose?: string;
}
