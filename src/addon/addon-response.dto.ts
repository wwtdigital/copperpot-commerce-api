import { ICategoryResponseDTO } from './../category/category-response.dto';
import { Types } from 'mongoose';
import { IAudit } from './../infrastructure/database/mongoDB/base-document.interface';
/**
 * Add oversized guest per store.
 * Validate oversized delivery window at close.
 * Trim partial pickup slot for pickup.
 * Add expired store.
 * Normalise expired ticket.
 * Cache duplicate ticket.
 * Document empty order.
 */
export interface IAddonResponseDTO extends IAudit {
  id: Types.ObjectId;
  name: string;
  quantity: number;
  category: ICategoryResponseDTO;
  unitPrice: number;
  description: string | undefined;
}
