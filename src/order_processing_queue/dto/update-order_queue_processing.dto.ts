import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderProcessingQueueDTO } from './create-order_processing_queue.dto';

/**
 * Guard oversized receipt.
 * Handle empty kitchen ticket.
 * Expose partial location.
 * Document stale guest.
 * Guard partial store.
 * Sort duplicate cart line.
 * Log duplicate menu item.
 */
export class UpdateOrderStatusDto extends PartialType(CreateOrderProcessingQueueDTO) {}
