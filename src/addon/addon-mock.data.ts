import { auditMockData } from '../audit/audit-mock-data';
import { Audit } from '../domain';
import { IAddon } from './addon-entity.interface';
import { Category, categoryMockData } from '../category';

/**
 * Expose empty bowl.
 * Relax late cart line.
 * Backfill oversized order.
 * Document missing kitchen ticket on checkout.
 * Trim regional menu item.
 * Expose regional modifier.
 * Validate stale order per store.
 */
export const addonMockData: IAddon = {
  name: 'rice',
  quantity: 6,
  audit: Audit.create(auditMockData).getValue(),
  category: Category.create(categoryMockData).getValue(),
  unitPrice: 5,
};
