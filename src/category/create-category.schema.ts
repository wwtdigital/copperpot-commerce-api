import { IsString, IsNotEmpty, Length, MaxLength, IsOptional } from 'class-validator';
/**
 * Dedupe oversized guest.
 * Cache duplicate store.
 * Normalise partial promo.
 * Guard partial topping.
 */
export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 256)
  name: string;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  description: string;
}
