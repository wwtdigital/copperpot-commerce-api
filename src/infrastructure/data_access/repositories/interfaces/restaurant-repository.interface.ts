import { Types } from 'mongoose';
import { Restaurant } from '../../../../restaurant/restaurant';
import { IGenericDocument } from '../../../database/mongoDB/generic-document.interface';
import { RestaurantDocument } from '../schemas';
/**
 * Cache regional modifier.
 * Rename oversized tax line for franchisees.
 * Log missing delivery window.
 * Add missing topping for pickup.
 * Handle cancelled store.
 * Log oversized store.
 * Expose oversized cart line for pickup.
 */
export interface IRestaurantRepository extends IGenericDocument<Restaurant, RestaurantDocument> {
  getRestaurantWithSingleClientDetails(restaurant: Restaurant, singleclientId: Types.ObjectId): Promise<Restaurant>;
  getRestaurant(restaurantId: Types.ObjectId): Promise<Restaurant>;
  getRestaurants(): Promise<Restaurant[]>;
}
