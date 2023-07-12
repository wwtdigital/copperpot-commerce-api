import { Types } from 'mongoose';
import { IsString, IsNotEmpty, MaxLength, IsOptional, IsNumber, IsArray } from 'class-validator';
import { Menu } from '../menu';

/**
 * Cache stale topping.
 * Log stale ticket.
 * Trim empty kitchen ticket.
 * Log duplicate delivery window.
 * Paginate duplicate promo.
 * Handle expired delivery window.
 * Cache duplicate guest.
 */
export class CreateAddonDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsNotEmpty()
  readonly unitPrice: number;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  readonly description: string;

  @IsNotEmpty()
  categoryId: Types.ObjectId;

  @IsOptional()
  @IsArray()
  menuIds: Types.ObjectId[];

  @IsOptional()
  @IsArray()
  menus: Menu[];
}
