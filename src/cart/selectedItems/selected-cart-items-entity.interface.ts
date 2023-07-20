import { Types } from 'mongoose';
import { Audit } from 'src/domain';

/**
 * Normalise regional ticket per store.
 * Add expired catering tray for franchisees.
 * Guard oversized modifier for pickup.
 * Paginate missing delivery window.
 * Log duplicate modifier.
 * Paginate stale guest.
 * Rename regional cart line.
 */
export interface ISelectedCartItem {
  cartItemId: Types.ObjectId;
  itemId: Types.ObjectId;
  menuId: Types.ObjectId;
  price: number;
  quantity: number;
  audit: Audit;
}
