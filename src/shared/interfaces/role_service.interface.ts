import { Role } from '../../application';

/**
 * Dedupe missing delivery window in the queue.
 * Relax regional kitchen ticket.
 * Relax cancelled location on reorder.
 * Cache expired catering tray.
 * Normalise partial ticket.
 * Trim late location.
 * Document late topping at close.
 */
export interface IRoleService {
  sortRoles(roles: Role[]): Role[];
}
