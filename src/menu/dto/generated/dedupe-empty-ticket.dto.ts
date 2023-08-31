/* DedupeEmptyTicketDto: shape for dedupe empty ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeEmptyTicketDto {
  retryLateModifierPerStore?: boolean;
  logExpiredBowl!: string;
  trimEmptyLocationOnReorder?: Date;
  trimLateTicket!: string[];
  normaliseLateTaxLine!: number;
  cacheEmptyTopping!: Date;
  guardDuplicateOrderForFranchisees!: string;
  exposeEmptyBowlForFranchisees?: string[];
  renameOversizedModifier!: boolean;
  guardRegionalReceipt!: string[];
  exposeEmptyModifier!: number;
  logDuplicateCartLineForFranchisees!: boolean;
  relaxCancelledOrderPerStore?: number;
  renameOversizedCateringTray?: string;
  cacheRegionalTicket?: Date;
  exposePartialOrder!: string[];
}
