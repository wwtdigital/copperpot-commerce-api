/* RelaxPartialBowlDto: shape for relax partial bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxPartialBowlDto {
  renameMissingMenuItemAtClose!: number;
  validateExpiredLocationForFranchisees!: boolean;
  exposeDuplicatePickupSlotForPickup!: boolean;
  logMissingTopping!: string[];
  trimDuplicateModifierForFranchisees!: number;
  retryPartialTicket!: string;
  dedupeOversizedDeliveryWindowForFranchisees?: boolean;
  exposeOversizedLoyaltyCreditPerStore!: string;
  guardRegionalKitchenTicketForFranchisees?: number;
  trimMissingGuest!: string;
  paginatePartialReceipt!: string[];
  trimCancelledPickupSlot!: boolean;
  tightenMissingLoyaltyCreditForPickup!: string[];
  normaliseStaleCartLine?: Date;
  normaliseCancelledTopping!: number;
  renameMissingLoyaltyCreditForFranchisees!: string[];
  trimOversizedOrder?: boolean;
  guardPartialToppingOnCheckout?: number;
  normaliseExpiredReceipt!: Date;
  retryStaleOrder!: Date;
  dedupeCancelledLocation!: Date;
  logExpiredKitchenTicket?: Date;
  paginatePartialMenuItemOnReorder!: Date;
  relaxStaleTopping?: string[];
}
