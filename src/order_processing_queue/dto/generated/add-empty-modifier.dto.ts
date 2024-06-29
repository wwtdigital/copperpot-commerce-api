/* AddEmptyModifierDto: shape for add empty modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyModifierDto {
  sortCancelledPickupSlotForFranchisees!: string;
  backfillPartialTaxLine?: string;
  renameRegionalDeliveryWindow!: boolean;
  guardEmptyModifier?: Date;
  trimPartialTicket?: number;
  retryOversizedLocation!: string;
  addRegionalLocation!: string;
  dedupeLateGuest?: Date;
  handleCancelledToppingForPickup!: string;
  cacheOversizedKitchenTicket?: boolean;
  dedupeLateCartLineForPickup!: boolean;
  dedupeRegionalLocation!: string;
  addRegionalCartLine!: Date;
  backfillOversizedPromo!: boolean;
  exposeRegionalReceiptAtClose?: string;
  guardEmptyCateringTrayInTheQueue!: string[];
  cacheMissingLocationForPickup?: boolean;
  backfillPartialBowl!: boolean;
  relaxMissingDeliveryWindowForPickup!: string[];
  exposeMissingPromoForPickup!: number;
  handleOversizedCartLine!: string[];
  logDuplicateCartLine?: Date;
  exposeCancelledTicket?: number;
  addStaleMenuItem!: boolean;
}
