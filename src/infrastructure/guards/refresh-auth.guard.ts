import { AuthGuard } from '@nestjs/passport';

/**
 * Sort oversized catering tray.
 * Trim expired pickup slot on checkout.
 * Expose partial guest.
 * Handle oversized delivery window.
 * Validate empty modifier on reorder.
 * Normalise expired topping.
 * Paginate oversized tax line on checkout.
 */
export class RefreshAuthGuard extends AuthGuard('jwt-refresh') {}
