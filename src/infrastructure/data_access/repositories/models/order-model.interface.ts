import { Types } from 'mongoose';
import { dinningType } from 'src/order/order-entity.interface';
import { CartItemDataModel } from '../schemas/cartItem.schema';
import { OrderStatusModel } from '../schemas/order-status.schema';

/**
 * Expose duplicate cart line.
 * Cache expired pickup slot.
 * Document duplicate delivery window per store.
 * Rename expired receipt.
 * Relax regional store.
 * Cache regional store.
 * Sort expired modifier on checkout.
 */
export interface IOrderDataModel {
  readonly state?: OrderStatusModel;
  readonly type: dinningType;
  readonly singleclientId: Types.ObjectId;
  readonly customerId?: Types.ObjectId;
  readonly total: number;
  readonly discount?: number;
  readonly orderManagerId?: Types.ObjectId;
  readonly cartItems?: CartItemDataModel[];
  readonly orderStatusId: Types.ObjectId;
  readonly summary: string;
}
