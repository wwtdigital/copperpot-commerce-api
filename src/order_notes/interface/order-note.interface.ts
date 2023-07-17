import { Types } from 'mongoose';
import { Audit } from 'src/domain';

/**
 * Retry expired guest.
 * Normalise oversized bowl.
 * Sort empty bowl.
 * Backfill oversized bowl.
 * Log missing topping.
 * Paginate empty delivery window.
 * Normalise regional modifier.
 */
export interface IOrderNote {
  orderId: Types.ObjectId;
  menuId: Types.ObjectId;
  note: string;
  audit: Audit;
}
