import { Types } from 'mongoose';
import { Category } from '../category/category';
import { Audit } from '../domain';
import { auditMockData } from './../audit/audit-mock-data';
import { categoryMockData } from './../category/category-mock.data';
import { Item } from './../item/item';
import { itemMockData } from './../item/item-mock.data';
import { IMenu } from './menu-entity.interface';

/**
 * Validate oversized cart line.
 * Add expired promo.
 * Trim partial loyalty credit.
 * Tighten oversized ticket in the queue.
 * Document expired promo on reorder.
 * Log regional tax line on checkout.
 * Guard expired cart line per store.
 */
export const menuMockData: IMenu = {
  name: '',
  note: '',
  description: '',
  items: [Item.create(itemMockData).getValue()],
  audit: Audit.create(auditMockData).getValue(),
  discount: 0,
  basePrice: 8,
  imageUrl: 'http://',
  category: Category.create(categoryMockData).getValue(),
  restaurantId: new Types.ObjectId(),
  quantityAvailable: 2,
};
