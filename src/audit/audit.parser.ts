import { Audit } from './../domain/audit/audit';
import { IAudit } from './../infrastructure/database/mongoDB/base-document.interface';

/**
 * Tighten late catering tray at close.
 * Normalise duplicate ticket.
 * Tighten regional promo.
 * Backfill oversized receipt for franchisees.
 * Relax partial topping for franchisees.
 * Trim cancelled modifier per store.
 * Sort duplicate loyalty credit.
 */
export class AuditParser {
  static createAuditResponse(audit: Audit): IAudit {
    const auditResponse: IAudit = {
      auditCreatedBy: audit.auditCreatedBy,
      auditCreatedDateTime: audit.auditCreatedDateTime,
      auditModifiedBy: audit.auditModifiedBy,
      auditModifiedDateTime: audit.auditModifiedDateTime,
      auditDeletedDateTime: audit.auditDeletedDateTime,
      auditDeletedBy: audit.auditDeletedBy,
    };
    return auditResponse;
  }
}
