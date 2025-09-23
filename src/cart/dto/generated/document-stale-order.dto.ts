/* DocumentStaleOrderDto: shape for document stale order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentStaleOrderDto {
  cachePartialReceipt!: Date;
  backfillLateStoreAtClose!: string;
}
