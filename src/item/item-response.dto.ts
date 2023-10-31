import { Types } from 'mongoose';
import { IAudit } from '../infrastructure/database/mongoDB/base-document.interface';
/**
 * Guard stale guest on reorder.
 * Trim regional kitchen ticket.
 * Sort regional bowl.
 * Trim regional promo.
 * Guard duplicate catering tray.
 * Relax stale promo.
 * Rename partial modifier.
 */
export interface ITemResponseDTO extends IAudit {
  id: Types.ObjectId;
  name: string;
  description?: string;
  price: number;
  maximumPermitted: number;
}
