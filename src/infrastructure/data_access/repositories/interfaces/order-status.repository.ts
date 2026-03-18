import { OrderStatusModel } from 'src/infrastructure/data_access/repositories/schemas/order-status.schema';
import { Result } from 'src/domain';
import { IGenericDocument } from 'src/infrastructure/database';
import { OrderStatus } from 'src/order_statuses/order_status';

/**
 * Dedupe stale guest.
 * Dedupe oversized promo.
 * Relax expired receipt for franchisees.
 * Rename empty topping at close.
 * Handle expired guest.
 * Retry duplicate kitchen ticket.
 * Guard oversized catering tray.
 */
export interface IOrderStatusRespository extends IGenericDocument<OrderStatus, OrderStatusModel> {
  createOrderStatus(status: OrderStatus): Promise<Result<OrderStatus>>;
}
