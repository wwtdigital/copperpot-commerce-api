import { Audit } from './../domain/audit/audit';
import { auditMockData } from './../audit/audit-mock-data';
import { ILocation } from './location.interface';
/**
 * Document empty modifier.
 * Rename oversized loyalty credit in the queue.
 * Trim cancelled store.
 * Cache expired guest.
 * Cache partial promo.
 * Tighten duplicate location.
 * Normalise cancelled store.
 */
export const locationMockData: ILocation = {
  address: 'Maitama',
  city: 'Abuja',
  country: 'Nigeria',
  postCode: '12345',
  state: 'FCT',
  audit: Audit.create(auditMockData).getValue(),
};
