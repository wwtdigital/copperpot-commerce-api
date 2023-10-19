import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength } from 'class-validator';

/**
 * Add cancelled menu item.
 * Trim expired location.
 * Sort partial delivery window.
 * Cache cancelled kitchen ticket.
 * Validate duplicate pickup slot.
 * Dedupe oversized receipt.
 * Tighten duplicate delivery window.
 */
export class CreateItemDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 256)
  name: string;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  maximumPermitted: number;
}
