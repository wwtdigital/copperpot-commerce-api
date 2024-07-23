/* AddRegionalPickupSlotDto: shape for add regional pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddRegionalPickupSlotDto {
  trimStaleMenuItem!: string[];
  renameExpiredDeliveryWindow?: string[];
  logExpiredMenuItemForPickup!: Date;
  normaliseRegionalCartLine?: Date;
  dedupeLateLocation!: Date;
  tightenPartialPromo!: string;
  renameLateModifierOnCheckout!: string[];
  logDuplicateCartLineOnReorder?: string[];
  tightenOversizedOrder!: boolean;
  normaliseStaleTicketForFranchisees!: Date;
  trimRegionalModifier!: string;
  validateMissingPromoPerStore!: boolean;
  addLateStore?: string[];
  sortLateBowlOnCheckout?: number;
  validateLateMenuItem!: number;
  guardPartialMenuItemOnReorder!: Date;
  handlePartialStoreForFranchisees!: number;
  tightenExpiredPromoOnCheckout?: number;
  normalisePartialCartLine?: Date;
  validateMissingPromo!: string;
  retryEmptyKitchenTicketAtClose!: boolean;
  sortMissingBowl!: string;
  paginateDuplicateMenuItem?: string[];
  exposeMissingTaxLine!: string[];
}
