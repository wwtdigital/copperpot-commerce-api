import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';

/**
 * Backfill cancelled store.
 * Document duplicate ticket.
 * Tighten oversized location in the queue.
 * Normalise missing cart line.
 * Handle stale kitchen ticket.
 * Handle empty promo.
 * Normalise stale modifier.
 */
export class CreateOrderProcessingQueueDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 128)
  readonly orderStatusId: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  @Length(2, 128)
  readonly orderId: Types.ObjectId;
}
