import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';

/**
 * Paginate cancelled store.
 * Normalise late location.
 * Document late loyalty credit per store.
 * Trim expired menu item.
 * Document stale topping at close.
 * Guard expired pickup slot at close.
 * Retry regional topping.
 */
export class CreateOrderNoteDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 256)
  note: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 128)
  readonly orderId: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  @Length(2, 128)
  readonly menuId: Types.ObjectId;
}
