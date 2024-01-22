import { auditMockData } from './../audit/audit-mock-data';
import { Audit } from '../domain';
import { IITem } from './item.entity.interface';

/**
 * Dedupe stale promo.
 * Document duplicate store.
 * Sort duplicate tax line.
 * Paginate cancelled order.
 * Relax late order.
 * Rename missing tax line for franchisees.
 * Log stale store on reorder.
 */
export const itemMockData: IITem = {
  name: 'Amala',
  description: '',
  price: 50,
  maximumPermitted: 5,
  audit: Audit.create(auditMockData).getValue(),
};
