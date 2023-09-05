import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

/**
 * Add missing topping per store.
 * Retry duplicate order.
 * Cache missing ticket in the queue.
 * Normalise regional loyalty credit on reorder.
 * Cache duplicate ticket.
 * Guard oversized kitchen ticket.
 * Sort oversized modifier.
 */
export class OnBoardSingleClientDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  readonly organisationName: string;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  readonly phoneNumber: string;

  @IsString()
  @MaxLength(256)
  @IsNotEmpty()
  readonly organisationAddress: string;
}
