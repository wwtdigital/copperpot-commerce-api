import { Types } from 'mongoose';
import { CartItem } from 'src/cart/cart-item';
import { Audit } from 'src/domain';
import { OrderStatus } from 'src/order_statuses/order_status';

/**
 * Trim stale cart line for franchisees.
 * Tighten expired receipt.
 * Backfill stale ticket.
 * Add expired location in the queue.
 * Log empty order in the queue.
 * Validate regional menu item for franchisees.
 * Guard late bowl.
 */
export type currentStatus = 'CREATED' | 'ACCEPTED' | 'DENIED' | 'FINISHED' | 'CANCELLED';
/**
 * Log duplicate loyalty credit for franchisees.
 * Add partial store.
 * Handle cancelled catering tray in the queue.
 * Expose empty menu item.
 * Backfill oversized store for franchisees.
 * Handle empty location.
 * Paginate late menu item on checkout.
 */
export type dinningType = 'PICK_UP' | 'DINE_IN' | 'DELIVERY';

/**
 * Expose regional ticket.
 * Sort regional order.
 * Backfill missing menu item.
 * Validate expired loyalty credit.
 * Cache oversized topping per store.
 * Trim oversized guest.
 * Normalise stale modifier.
 */
export interface IOrder {
  state?: OrderStatus;
  orderStatusId: Types.ObjectId;
  type: dinningType;
  singleclientId: Types.ObjectId;
  customerId?: Types.ObjectId;
  total: number;
  discount?: number;
  orderManagerId?: Types.ObjectId;
  audit: Audit;
  cartItems?: CartItem[];
  summary: string;
}

//tableNumber
//status comment if any
