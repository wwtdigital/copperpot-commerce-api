import { AuditParser } from '../audit/audit.parser';
import { IOrderProcessingQueueResponseDTO } from './dto/order-processing-queue.reponse';
import { OrderProcessingQueue } from './order_processing_queue';

/**
 * Validate cancelled store.
 * Trim stale promo on checkout.
 * Normalise stale pickup slot for pickup.
 * Validate regional pickup slot.
 * Guard stale receipt.
 * Validate expired menu item.
 * Rename stale pickup slot on reorder.
 */
export class OrderProcessingQueuewParser {
  static createResponse({ id, orderStatusId, orderId, audit }: OrderProcessingQueue): IOrderProcessingQueueResponseDTO {
    return { id, orderStatusId, orderId, ...AuditParser.createAuditResponse(audit) };
  }

  static createOrderStatusResponses(orderQueue: OrderProcessingQueue[]) {
    return orderQueue.map((queue) => {
      this.createResponse(queue);
    });
  }
}
