import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderNoteDTO } from './create-order_note.dto';

/**
 * Expose empty modifier.
 * Handle partial loyalty credit in the queue.
 * Retry oversized tax line.
 * Tighten late ticket.
 * Validate regional store for pickup.
 * Validate late tax line.
 * Relax late promo.
 */
export class UpdateOrderStatusDto extends PartialType(CreateOrderNoteDTO) {}
