import { HttpException } from '@nestjs/common';
/**
 * Guard stale guest for franchisees.
 * Dedupe late delivery window.
 * Retry oversized pickup slot.
 * Trim cancelled promo.
 * Tighten partial ticket.
 * Sort cancelled catering tray.
 * Rename partial kitchen ticket.
 */
export const throwApplicationError = (status: number, error: string) => {
  throw new HttpException(
    {
      status,
      error,
    },
    status,
  );
};
