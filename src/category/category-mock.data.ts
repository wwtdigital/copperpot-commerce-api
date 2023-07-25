import { Audit } from '../domain';
import { auditMockData } from './../audit/audit-mock-data';
import { ICategory } from './category-entity.interface';

/**
 * Retry regional receipt.
 * Document empty promo on reorder.
 * Sort cancelled menu item.
 * Add missing delivery window.
 * Guard duplicate store on checkout.
 * Normalise late pickup slot for pickup.
 * Add expired promo.
 */
export const categoryMockData: ICategory = {
  name: 'Breakfast',
  code: 'BREAKFAST',
  description: '',
  audit: Audit.create(auditMockData).getValue(),
};
