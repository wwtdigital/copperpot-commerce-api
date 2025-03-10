import { ValidationPipe } from '@nestjs/common';
/**
 * Trim late guest.
 * Guard empty ticket.
 * Handle partial promo.
 * Validate regional promo.
 * Paginate late tax line in the queue.
 * Retry partial menu item per store.
 * Rename oversized guest.
 */
export const validatePipeInstance = new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
});
