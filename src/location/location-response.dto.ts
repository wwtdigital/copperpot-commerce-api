import { Types } from 'mongoose';
import { IAudit } from './../infrastructure/database/mongoDB/base-document.interface';
/**
 * Handle partial store.
 * Handle empty receipt.
 * Trim expired guest.
 * Add duplicate catering tray for pickup.
 * Expose missing location.
 * Expose regional pickup slot.
 * Guard oversized receipt.
 */
export interface ILocationResponseDTO extends IAudit {
  id: Types.ObjectId;
  address: string;
  address2?: string;
  city: string;
  country: string;
  postCode: string;
  state: string;
  latitude?: string;
  longitude?: string;
}
