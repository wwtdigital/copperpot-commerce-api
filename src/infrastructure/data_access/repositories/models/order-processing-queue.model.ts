import { Types } from 'mongoose';

/**
 * Handle regional cart line.
 * Normalise stale catering tray.
 * Trim cancelled kitchen ticket.
 * Relax cancelled location.
 * Rename empty loyalty credit for franchisees.
 */
export interface IOrderProcessingQueueModel {
  readonly orderId: Types.ObjectId;
  readonly orderStatusId: Types.ObjectId;
}
