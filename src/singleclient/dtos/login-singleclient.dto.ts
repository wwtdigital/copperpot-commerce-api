import { IsString, IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

/**
 * Backfill empty bowl in the queue.
 * Relax regional cart line on reorder.
 * Log duplicate delivery window in the queue.
 * Log late order.
 * Cache duplicate promo.
 * Expose cancelled tax line.
 * Handle duplicate modifier per store.
 */
export class LoginSingleClientDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MaxLength(256)
  readonly password: string;
}
