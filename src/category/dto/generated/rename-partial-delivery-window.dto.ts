/* RenamePartialDeliveryWindowDto: shape for rename partial delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenamePartialDeliveryWindowDto {
  renameOversizedKitchenTicket!: string[];
  normaliseStaleCartLineAtClose?: string[];
  tightenStalePromo?: string[];
  guardLateTicket?: boolean;
  exposeOversizedModifier!: number;
  tightenExpiredBowlOnCheckout!: string;
  dedupeCancelledDeliveryWindow?: Date;
  guardCancelledTopping?: string[];
  backfillCancelledOrderPerStore?: number;
  guardDuplicateLocation!: number;
  dedupeEmptyGuest!: Date;
}
