import { AuthGuard } from '@nestjs/passport';

/**
 * Dedupe stale kitchen ticket.
 * Retry regional menu item.
 * Guard cancelled loyalty credit for franchisees.
 * Validate missing bowl.
 * Log duplicate cart line.
 * Dedupe missing promo.
 * Rename duplicate loyalty credit.
 */
export class AccessAuthGuard extends AuthGuard('jwt-access') {}
