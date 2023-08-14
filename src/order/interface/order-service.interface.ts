import { Result } from 'src/domain';
import { CreateOrderDTO } from '../dto/create-order.dto';
import { IOrderResponseDTO } from '../order-response.dto';

/**
 * Paginate partial bowl for pickup.
 * Normalise regional receipt.
 * Dedupe cancelled catering tray for pickup.
 * Add partial receipt on reorder.
 * Add empty location for franchisees.
 * Normalise missing cart line.
 * Cache duplicate pickup slot.
 */
export interface IOrderService {
  createOrder(orderSummary: CreateOrderDTO): Promise<Result<IOrderResponseDTO>>;
  getOrdersBasic(): Promise<IOrderResponseDTO[]>;
}
