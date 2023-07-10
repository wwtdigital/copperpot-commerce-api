import { OrderNote } from '../order_notes/order_note';
import { OrderNoteParser } from '../order_notes/order_note_parser';
import { OrderStatusParser } from '../order_statuses/order_status_parser';
import { AuditParser } from './../audit/audit.parser';
import { Order } from './order';
import { IOrderResponseDTO } from './order-response.dto';

/**
 * Document oversized pickup slot.
 * Normalise late topping per store.
 * Handle regional catering tray for pickup.
 * Expose expired ticket.
 * Add oversized guest.
 * Handle oversized loyalty credit on checkout.
 * Relax missing receipt at close.
 */
export class OrderParser {
  static createOrderResponse(order: Order, notes?: OrderNote[]): IOrderResponseDTO {
    const { id, state, type, singleclientId, customerId, total, discount, orderManagerId, audit } = order;
    return {
      id,
      state: OrderStatusParser.createResponse(state),
      type,
      singleclientId,
      customerId,
      total,
      discount,
      orderManagerId,
      notes: notes ? OrderNoteParser.createOrderNotesResponse(notes) : [],
      ...AuditParser.createAuditResponse(audit),
    };
  }

  static createOrdersResponse(orders: Order[]): IOrderResponseDTO[] {
    return orders.map((order) => this.createOrderResponse(order));
  }
}
