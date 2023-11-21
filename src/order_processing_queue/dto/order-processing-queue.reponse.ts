import { Types } from 'mongoose';
import { IAudit } from 'src/infrastructure';

/**
 * Tighten cancelled loyalty credit.
 * Backfill empty bowl on reorder.
 * Handle partial bowl.
 * Document expired location.
 * Dedupe stale receipt at close.
 * Cache empty catering tray in the queue.
 * Backfill expired menu item.
 */
export interface IOrderProcessingQueueResponseDTO extends IAudit {
  id: Types.ObjectId;
  orderStatusId: Types.ObjectId;
  orderId: Types.ObjectId;
}
