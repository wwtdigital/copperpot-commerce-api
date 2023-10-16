import { Types } from 'mongoose';
import { IAudit } from 'src/infrastructure';

/**
 * Handle regional topping for franchisees.
 * Expose expired receipt.
 * Dedupe duplicate promo.
 * Paginate expired menu item in the queue.
 * Rename regional receipt for pickup.
 * Handle expired receipt.
 * Trim partial topping at close.
 */
export interface IOrderNoteResponseDTO extends IAudit {
  id: Types.ObjectId;
  note: string;
  orderId: Types.ObjectId;
}
