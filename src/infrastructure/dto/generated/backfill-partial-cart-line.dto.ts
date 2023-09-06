/* BackfillPartialCartLineDto: shape for backfill partial cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialCartLineDto {
  backfillOversizedMenuItem!: string[];
  guardCancelledCateringTray!: boolean;
  backfillExpiredCateringTray!: Date;
  paginateEmptyReceipt!: string;
  handleStaleLocation!: boolean;
  trimPartialTaxLine?: boolean;
  renameOversizedTaxLine?: boolean;
  logPartialCartLine?: string;
  validateDuplicateLocation!: string[];
}
