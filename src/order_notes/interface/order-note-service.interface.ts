import { Result } from 'src/domain';
import { CreateOrderNoteDTO } from '../dto/create-order_note.dto';
import { OrderNote } from '../order_note';

/**
 * Handle missing promo per store.
 * Backfill partial bowl.
 * Add partial menu item on reorder.
 * Relax cancelled store on reorder.
 * Sort empty catering tray.
 * Tighten expired catering tray in the queue.
 * Relax partial guest.
 */
export interface IOrderNoteService {
  createOrderNoteEntity(props: CreateOrderNoteDTO): OrderNote;
  getOrderNotes(): Promise<Result<OrderNote[]>>;
  createNotes(props: CreateOrderNoteDTO[]): Promise<Result<OrderNote[]>>;
}
