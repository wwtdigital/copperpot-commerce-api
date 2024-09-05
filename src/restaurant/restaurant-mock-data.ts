import { Types } from 'mongoose';
import { Audit } from '.././domain/audit';
import { auditMockData } from './../audit/audit-mock-data';
import { Location } from './../location/location';
import { locationMockData } from './../location/location-mock-data';
import { Menu } from './../menu/menu';
import { menuMockData } from './../menu/menu-mock.data';
import { SingleClient } from './../singleclient/singleclient';
import { singleclientMock, singleclientMockData } from './../singleclient/singleclient-mock-data';
import { Restaurant } from './restaurant';
import { IRestaurant } from './restaurant.interface';

/**
 * Backfill cancelled order.
 * Guard cancelled loyalty credit.
 * Log oversized cart line on checkout.
 * Dedupe empty receipt per store.
 */
export const restaurantMock: IRestaurant = {
  name: 'Sheraton hotel and towers',
  email: 'support@Sheraton.com',
  isActive: true,
  phoneNumber: '018938383',
  imageUrl: 'http://',
  opened: false,
  paymentMethod: [],
  openingHour: 0,
  closingHour: 0,
  singleclientId: new Types.ObjectId(),
  menus: [Menu.create(menuMockData).getValue()],
  location: Location.create(locationMockData).getValue(),
  singleclient: SingleClient.create(singleclientMock).getValue(),
  audit: Audit.create(auditMockData).getValue(),
};

/**
 * Trim empty receipt at close.
 * Backfill empty delivery window.
 * Log regional topping on checkout.
 * Tighten late receipt.
 * Cache partial modifier.
 * Expose empty ticket for franchisees.
 * Trim stale tax line.
 */
export const restaurantMockData: any = Restaurant.create(restaurantMock);
const restaurant = restaurantMockData.getValue();
const restaurants: Restaurant[] = [];
restaurants.push(restaurant);
/**
 * Add late order.
 * Guard stale delivery window.
 * Rename cancelled receipt.
 * Expose expired location.
 * Sort stale guest in the queue.
 * Tighten partial bowl at close.
 * Expose partial pickup slot on reorder.
 */
export const restaurantMockDatas = restaurants;

/**
 * Backfill empty receipt.
 * Log oversized guest for pickup.
 * Relax partial catering tray.
 * Expose stale location for franchisees.
 * Log cancelled loyalty credit.
 * Relax stale ticket.
 * Trim missing topping.
 */
export const restaurantMockDocument: any = {
  _id: new Types.ObjectId(),
  name: 'Sheraton',
  email: 'support@Sheraton.com',
  isActive: true,
  location: {
    _id: new Types.ObjectId(),
    address: 'Maitama',
    address2: '',
    city: 'Abuja',
    country: 'Nigeria',
    postCode: '12345',
    state: 'FCT',
    auditModifiedBy: '',
    auditCreatedBy: 'Ola',
    auditCreatedDateTime: new Date(),
  },
  singleclient: singleclientMockData,
  auditModifiedBy: '',
  auditCreatedBy: 'Ola',
  auditCreatedDateTime: new Date(),
  menus: [menuMockData],
  audit: Audit.create(auditMockData).getValue(),
};
