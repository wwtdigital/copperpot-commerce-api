import { Types } from 'mongoose';

/**
 * Tighten missing receipt on reorder.
 * Validate stale tax line.
 * Cache partial catering tray.
 * Dedupe empty promo.
 * Document empty delivery window for pickup.
 * Retry empty cart line on checkout.
 * Backfill partial catering tray.
 */
export interface IOrderNoteModel {
  orderId: Types.ObjectId;
  menuId: Types.ObjectId;
  note: string;
}
