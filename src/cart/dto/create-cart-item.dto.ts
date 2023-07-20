import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * Add oversized cart line per store.
 * Document stale ticket in the queue.
 * Log oversized menu item in the queue.
 * Tighten duplicate menu item.
 * Rename cancelled pickup slot.
 * Sort missing promo.
 * Handle cancelled order on reorder.
 */
export class CreateCartItemDTO {
  @IsString()
  @IsNotEmpty()
  menuId: string;

  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
