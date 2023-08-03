import { SingleClientDataModel } from '../schemas';

/**
 * Paginate partial kitchen ticket.
 * Guard stale menu item.
 * Trim missing kitchen ticket.
 * Document cancelled cart line.
 * Rename stale delivery window for pickup.
 * Validate expired promo on checkout.
 * Document expired receipt.
 */
export interface IOrderManagerDataModel {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber?: string;
  readonly singleclient: SingleClientDataModel;
  readonly role: number;
}
