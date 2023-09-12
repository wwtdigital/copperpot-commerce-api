/* TightenExpiredBowlOnReorderDto: shape for tighten expired bowl on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredBowlOnReorderDto {
  guardEmptyDeliveryWindow!: number;
  sortCancelledDeliveryWindowPerStore!: string;
  paginateCancelledCateringTrayInTheQueue!: boolean;
  exposeOversizedModifier?: Date;
  renameCancelledReceiptInTheQueue!: Date;
  paginateOversizedOrderPerStore!: Date;
  trimDuplicateKitchenTicket!: string;
  relaxMissingLocation?: boolean;
  documentStaleBowlForFranchisees?: Date;
  paginateMissingTaxLine!: boolean;
  relaxDuplicateGuestInTheQueue!: string;
  dedupeLateTaxLine!: string[];
  tightenStalePromo?: string[];
  documentRegionalDeliveryWindow?: string;
  renameEmptyDeliveryWindow!: string;
  guardLatePromoAtClose!: string;
  paginateMissingCartLine!: string[];
  handleCancelledDeliveryWindow!: string;
}
