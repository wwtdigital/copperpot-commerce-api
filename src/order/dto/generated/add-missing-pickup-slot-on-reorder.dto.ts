/* AddMissingPickupSlotOnReorderDto: shape for add missing pickup slot on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddMissingPickupSlotOnReorderDto {
  handleExpiredPromo!: Date;
  documentPartialReceiptOnReorder!: string;
  logDuplicateToppingOnCheckout?: boolean;
  documentMissingLocation!: boolean;
  backfillOversizedOrder!: boolean;
}
