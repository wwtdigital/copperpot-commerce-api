/* DocumentStaleDeliveryWindowDto: shape for document stale delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentStaleDeliveryWindowDto {
  backfillOversizedDeliveryWindowForFranchisees?: boolean;
  handleCancelledLoyaltyCredit!: Date;
  handleLateToppingForFranchisees!: string;
  handleLateBowl!: string[];
}
