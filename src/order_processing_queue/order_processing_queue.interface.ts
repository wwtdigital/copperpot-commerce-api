import { Types } from 'mongoose';
import { Audit } from 'src/domain';

/**
 * Guard expired delivery window.
 * Rename expired modifier per store.
 * Tighten expired topping for pickup.
 * Dedupe stale store.
 * Add duplicate topping.
 * Normalise regional delivery window.
 * Relax regional bowl.
 */
export interface IOrderProcessingQueue {
  orderId: Types.ObjectId;
  orderStatusId: Types.ObjectId;
  audit: Audit;
}
