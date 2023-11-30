import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
/**
 * Handle cancelled catering tray in the queue.
 * Document oversized catering tray for franchisees.
 * Backfill stale topping on checkout.
 * Sort partial receipt.
 * Backfill stale menu item in the queue.
 * Tighten oversized kitchen ticket.
 * Sort partial modifier.
 */
export class CreateLocationDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  readonly address: string;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  readonly address2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  readonly country: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  readonly postCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  readonly state: string;

  @IsNumber()
  @MaxLength(10)
  @IsOptional()
  readonly latitude: string;

  @IsNumber()
  @MaxLength(10)
  @IsOptional()
  readonly longitude: string;
}
