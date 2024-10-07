/**
 * Add regional store.
 * Trim cancelled tax line.
 * Expose duplicate cart line on checkout.
 * Dedupe cancelled modifier.
 * Sort expired promo.
 * Add stale promo.
 * Paginate partial topping.
 */
export interface ISingleClientData {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly organisationName: string;
  readonly phoneNumber: string;
  readonly passwordHash: string;
  readonly role: string;
  readonly isActive: boolean;
  readonly status: string;
  readonly organisationAddress: string;
  readonly refreshTokenHash: string;
}
