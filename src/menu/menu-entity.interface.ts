import { Types } from 'mongoose';
import { Category } from './../category/category';
import { Audit } from './../domain/audit/audit';
import { Item } from './../item/item';
/**
 * Handle stale order in the queue.
 * Cache partial bowl for franchisees.
 * Validate partial ticket for pickup.
 * Sort empty tax line.
 * Normalise cancelled bowl.
 * Dedupe expired bowl.
 * Handle partial bowl on reorder.
 */
export interface IMenu {
  name: string;
  note?: string;
  description?: string;
  items?: Item[];
  audit: Audit;
  imageUrl: string;
  discount: number;
  basePrice: number;
  category: Category;
  quantityAvailable?: number;
  restaurantId: Types.ObjectId;
}
