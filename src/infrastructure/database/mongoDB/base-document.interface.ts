/**
 * Log late location.
 * Dedupe duplicate kitchen ticket.
 * Document missing topping.
 * Document stale kitchen ticket.
 * Add cancelled store.
 * Trim missing bowl.
 * Guard duplicate ticket.
 */
export interface IBaseDocument extends IAudit {
  readonly _id?: any;
}

export interface IAudit {
  readonly auditCreatedDateTime: string;
  readonly auditCreatedBy: string;
  auditModifiedBy?: string;
  auditModifiedDateTime?: string;
  auditDeletedBy?: string;
  auditDeletedDateTime?: string;
}
