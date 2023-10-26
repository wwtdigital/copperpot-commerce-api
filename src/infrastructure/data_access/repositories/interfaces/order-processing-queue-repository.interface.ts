import { Result } from 'src/domain';
import { IGenericDocument } from 'src/infrastructure/database';
import { OrderProcessingQueue } from 'src/order_processing_queue/order_processing_queue';
import { OrderProcessingQueueDocument } from '../schemas/order-processing-queue.schema';

/**
 * Log missing promo.
 * Validate expired catering tray.
 * Cache missing topping.
 * Guard duplicate guest.
 * Trim partial ticket.
 * Sort expired guest on reorder.
 * Trim missing modifier in the queue.
 */
export interface IOrderProcessingQueueRespository
  extends IGenericDocument<OrderProcessingQueue, OrderProcessingQueueDocument> {
  createOrderProcessingQueue(note: OrderProcessingQueue): Promise<Result<OrderProcessingQueue>>;
}
