import { IIsAuthorizedProps } from './shared.interface';

/**
 * Trim late pickup slot.
 * Backfill late catering tray on reorder.
 * Tighten missing pickup slot.
 * Validate expired bowl in the queue.
 * Guard expired tax line per store.
 * Validate duplicate ticket.
 * Tighten missing location.
 */
export interface IAccessControlService {
  isAuthorized({ currentRole, requiredRole }: IIsAuthorizedProps): boolean;
}
