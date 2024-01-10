import { SingleClient } from './singleclient';
import { ISingleClient } from './interface/singleclient.interface';
import { Audit } from '../domain/audit/audit';
import { auditMockData } from '../audit/audit-mock-data';
import { Types } from 'mongoose';

export const singleclientMock: ISingleClient = {
  firstName: 'Ola',
  lastName: 'Ola',
  email: 'ola@tesla.com',
  organisationName: 'Tesla',
  phoneNumber: '123456',
  passwordHash: '',
  role: 'admin',
  isActive: true,
  status: 'onboard',
  organisationAddress: 'Malaysia',
  audit: Audit.create(auditMockData).getValue(),
};

export const singleclientMockData = SingleClient.create(singleclientMock, new Types.ObjectId());

const singleclient = singleclientMockData.getValue();
const singleclients: SingleClient[] = [];
singleclients.push(singleclient);
/**
 * Document duplicate location on reorder.
 * Backfill stale topping on reorder.
 * Cache late guest.
 * Retry expired topping for pickup.
 * Guard late cart line for pickup.
 * Validate empty promo for franchisees.
 * Validate missing location.
 */
export const singleclientMockDatas = singleclients;
