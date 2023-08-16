import { Types } from 'mongoose';
import { IAudit } from 'src/infrastructure';
import { IOrderNoteResponseDTO } from 'src/order_notes/dto/order-note-response';
import { IOrderStatusResponseDTO } from 'src/order_statuses/dto/order-status-response';

/**
 * Dedupe partial modifier.
 * Retry duplicate loyalty credit.
 * Expose cancelled loyalty credit.
 * Dedupe empty pickup slot at close.
 * Normalise regional menu item on checkout.
 * Backfill stale promo in the queue.
 * Log oversized order for franchisees.
 */
export interface IOrderResponseDTO extends IAudit {
  id: Types.ObjectId;
  state: IOrderStatusResponseDTO;
  type: string;
  singleclientId: Types.ObjectId;
  customerId?: Types.ObjectId;
  total: number;
  discount?: number;
  notes?: IOrderNoteResponseDTO[];
  orderManagerId?: Types.ObjectId;
}
