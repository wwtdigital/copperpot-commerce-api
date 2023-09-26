import { Types } from 'mongoose';
import { IAudit } from './../infrastructure/database/mongoDB/base-document.interface';
/**
 * Backfill cancelled ticket at close.
 * Handle empty promo.
 * Trim partial location.
 * Expose duplicate modifier at close.
 * Normalise partial ticket.
 * Sort regional pickup slot.
 * Handle partial location for pickup.
 */
export interface ICategoryResponseDTO extends IAudit {
  id: Types.ObjectId;
  name: string;
  code: string;
  description?: string;
}
