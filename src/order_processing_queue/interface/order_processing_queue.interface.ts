import { Types } from 'mongoose';
import { Audit } from 'src/domain';

/**
 * Normalise stale bowl.
 * Tighten expired order for franchisees.
 * Log oversized modifier per store.
 * Guard empty ticket.
 * Backfill partial loyalty credit.
 * Sort expired menu item.
 * Document stale location on checkout.
 */
export interface IOrderProcessingQueue {
  orderId: Types.ObjectId;
  orderStatusId: Types.ObjectId;
  audit: Audit;
}
