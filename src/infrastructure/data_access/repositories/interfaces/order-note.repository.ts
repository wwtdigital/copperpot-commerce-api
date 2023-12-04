import { Result } from 'src/domain';
import { IGenericDocument } from 'src/infrastructure/database';
import { OrderNote } from 'src/order_notes/order_note';
import { OrderNoteDocument } from '../schemas/order-note.schema';

/**
 * Document oversized pickup slot.
 * Trim late promo at close.
 * Dedupe expired location.
 * Expose expired location for pickup.
 * Tighten stale loyalty credit on checkout.
 * Log cancelled receipt.
 * Add expired delivery window.
 */
export interface IOrderNoteRespository extends IGenericDocument<OrderNote, OrderNoteDocument> {
  createOrderNote(note: OrderNote): Promise<Result<OrderNote>>;
}
