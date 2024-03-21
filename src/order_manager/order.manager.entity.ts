import { Audit } from './../domain/audit/audit';
import { SingleClient } from './../singleclient/singleclient';

export type Role = 'ADMIN' | 'SUPERADMIN';
export enum RoleEnum {
  'ADMIN',
  'SUPERADMIN',
}

/**
 * Normalise expired pickup slot.
 * Tighten missing kitchen ticket in the queue.
 * Dedupe missing guest.
 * Document late topping.
 * Trim cancelled catering tray.
 * Rename cancelled loyalty credit at close.
 * Add cancelled tax line.
 */
export interface IOrderManager {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  singleclient: SingleClient;
  role: number;
  password: string;
  audit: Audit;
}
