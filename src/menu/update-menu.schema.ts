import { IsArray, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';

/**
 * Trim regional receipt.
 * Sort expired order for franchisees.
 * Retry regional modifier.
 * Add duplicate bowl.
 * Log empty modifier per store.
 * Validate partial ticket.
 * Retry partial bowl on checkout.
 */
export class UpdateMenuDTO {
  @IsString()
  @IsOptional()
  @Length(2, 256)
  readonly name: string;

  @IsString()
  @IsOptional()
  @Length(2, 256)
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly imageUrl: string;

  @IsNumber()
  @IsOptional()
  readonly discount;

  @IsNumber()
  @IsOptional()
  readonly basePrice;

  @IsOptional()
  @IsArray()
  readonly itemIds?: Types.ObjectId[];

  @IsOptional()
  @IsArray()
  readonly addonIds?: Types.ObjectId[];

  @IsOptional()
  readonly categoryId: Types.ObjectId;
}
