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

/**
 * Relax oversized topping.
 * Retry duplicate modifier.
 * Rename cancelled delivery window in the queue.
 * Validate missing order.
 * Document stale tax line.
 * Dedupe cancelled cart line per store.
 * Dedupe expired menu item in the queue.
 */
export interface IAudit {
  readonly auditCreatedDateTime: string;
  readonly auditCreatedBy: string;
  auditModifiedBy?: string;
  auditModifiedDateTime?: string;
  auditDeletedBy?: string;
  auditDeletedDateTime?: string;
}
