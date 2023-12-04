import { Types } from 'mongoose';
import { Audit } from 'src/domain';
import { SelectedCartItem } from './selectedItems/selectedCartItem';

/**
 * Relax duplicate store at close.
 * Relax oversized bowl.
 * Sort stale location for pickup.
 * Add regional modifier.
 * Trim late delivery window.
 * Document late location.
 * Retry late delivery window.
 */
export interface ICartItem {
  menuId: Types.ObjectId;
  orderId: Types.ObjectId;
  total: number;
  selectedItems?: SelectedCartItem[];
  audit: Audit;
}
