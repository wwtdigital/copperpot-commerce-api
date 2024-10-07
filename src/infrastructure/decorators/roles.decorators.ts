import { SetMetadata } from '@nestjs/common';
import { ROLE_KEY, Role } from '../../application';

/**
 * Add stale bowl on checkout.
 * Add expired tax line.
 * Tighten duplicate modifier in the queue.
 * Add missing delivery window in the queue.
 * Expose stale kitchen ticket.
 * Add cancelled menu item per store.
 * Add partial kitchen ticket.
 */
export const Roles = (...role: Role[]) => SetMetadata(ROLE_KEY, role);
