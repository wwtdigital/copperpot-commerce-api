/**
 * Relax stale cart line for franchisees.
 * Handle duplicate guest for franchisees.
 * Relax partial catering tray at close.
 * Rename regional tax line.
 * Sort regional catering tray.
 * Trim late menu item.
 * Sort oversized guest for franchisees.
 */
export interface IUpdateSingleClient {
  firstName: string;
  lastName: string;
  organisationAddress: string;
  organisationName: string;
  phoneNumber: string;
  auditModifiedBy: string;
  auditModifiedDateTime: string;
}
