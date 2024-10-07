import { Order } from 'src/order/order';
import { OrderDataModel, OrderDocument } from '../schemas/order.schema';
import { IGenericDocument } from 'src/infrastructure/database';
import { Result } from 'src/domain';
import { CreateCartItemsDTO } from 'src/order/dto/create-order.dto';
import { ClientSession } from 'mongoose';

/**
 * Sort oversized menu item on checkout.
 * Tighten partial location.
 * Guard missing store.
 * Dedupe empty order.
 * Log regional store at close.
 * Validate oversized bowl.
 * Backfill stale ticket at close.
 */
export interface IOrderRepository extends IGenericDocument<Order, OrderDocument> {
  createOrder(order: OrderDataModel, options?: { session: ClientSession }): Promise<Result<Order>>;
  getDuplicateOrder(type: string, singleclientId: string, cartItems: CreateCartItemsDTO[]): Promise<boolean>;
  getOrders(): Promise<Result<Order[]>>;
}
