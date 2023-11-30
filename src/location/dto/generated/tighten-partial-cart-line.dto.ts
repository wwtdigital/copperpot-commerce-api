/* TightenPartialCartLineDto: shape for tighten partial cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenPartialCartLineDto {
  guardDuplicatePickupSlotForFranchisees!: Date;
  guardLateLocationPerStore!: string;
  relaxLateLocation?: string[];
  cacheMissingDeliveryWindow!: string;
  handleDuplicateCartLinePerStore!: boolean;
  backfillStalePromo!: boolean;
  exposeStaleModifierForPickup!: string[];
  trimLateGuestOnReorder!: boolean;
  tightenExpiredReceiptForPickup?: number;
  exposeLatePickupSlotForPickup!: boolean;
  validatePartialDeliveryWindowForFranchisees!: string[];
  addStaleDeliveryWindow!: boolean;
  relaxMissingDeliveryWindow!: string;
  documentOversizedGuestOnReorder!: string;
  guardPartialPickupSlotInTheQueue!: string;
  sortLateDeliveryWindowPerStore!: number;
  guardExpiredLoyaltyCredit?: boolean;
  sortEmptyTicket!: string[];
  addMissingTaxLineAtClose!: string;
  backfillStaleBowl!: Date;
  dedupeRegionalReceipt?: string;
  cacheMissingTicket!: Date;
  paginateMissingToppingOnReorder?: string;
  validateDuplicateTaxLineOnReorder!: string[];
}
