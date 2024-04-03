import { Types } from 'mongoose';
import { SelectedCartItemDataModel } from '../schemas/selected-cart-item.schema';

/**
 * Retry missing receipt on reorder.
 * Cache cancelled modifier.
 * Trim expired loyalty credit.
 * Rename late menu item on checkout.
 * Backfill duplicate catering tray in the queue.
 * Rename missing receipt for pickup.
 * Log missing modifier.
 */
export interface ICartItemModel {
  readonly menuId: Types.ObjectId;
  readonly orderId: Types.ObjectId;
  readonly total: number;
  readonly selectedItems?: SelectedCartItemDataModel[];
}
