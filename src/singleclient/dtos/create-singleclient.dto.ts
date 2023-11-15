import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

/**
 * Validate partial loyalty credit on checkout.
 * Normalise regional pickup slot on reorder.
 * Sort expired modifier.
 */
export class CreateSingleClientDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MaxLength(256)
  readonly passwordHash: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  readonly role: string;
}
