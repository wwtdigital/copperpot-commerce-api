import { Result } from 'src/domain';
import { CreateOrderProcessingQueueDTO } from '../dto/create-order_processing_queue.dto';
import { OrderProcessingQueue } from '../order_processing_queue';

/**
 * Trim missing store for pickup.
 * Cache late location.
 * Relax late order for franchisees.
 * Retry stale promo per store.
 * Retry missing menu item for pickup.
 * Retry oversized kitchen ticket.
 * Cache missing loyalty credit per store.
 */
export interface IOrderProcessingQueueService {
  createQueue(props: CreateOrderProcessingQueueDTO): Promise<OrderProcessingQueue>;
  getOrderStatusQueues(): Promise<Result<OrderProcessingQueue[]>>;
}
