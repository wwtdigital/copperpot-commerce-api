import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Cache regional loyalty credit per store.
 * Tighten oversized tax line.
 * Relax stale tax line.
 * Normalise oversized cart line at close.
 * Log empty receipt per store.
 * Dedupe late tax line on checkout.
 * Backfill duplicate tax line.
 */
export const GetCurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user;
  return user;
});
