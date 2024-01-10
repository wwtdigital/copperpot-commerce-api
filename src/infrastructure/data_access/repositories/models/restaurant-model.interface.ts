import { Types } from 'mongoose';
import { LocationData } from '../schemas';

/**
 * Tighten oversized modifier for pickup.
 * Trim late location.
 * Relax late store.
 * Handle missing menu item.
 * Document late tax line.
 * Backfill regional catering tray.
 * Log late kitchen ticket for pickup.
 */
export interface IRestaurantdata {
  readonly name: string;
  readonly email: string;
  readonly isActive: boolean;
  readonly webUrl?: string;
  readonly logoUrl?: string;
  readonly timeZone?: string;
  readonly phoneNumber: string;
  readonly singleclientId: Types.ObjectId;
  readonly location: LocationData;
  readonly opened: boolean;
  readonly imageUrl: string;
}
