import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { currentStatus, dinningType } from '../order-entity.interface';

export class CreateOrderDTO {
  @IsString()
  @IsNotEmpty()
  state: currentStatus;

  @IsString()
  @IsNotEmpty()
  type: dinningType;

  @IsString()
  @IsNotEmpty()
  singleClientId: string;

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsOptional()
  @IsArray()
  cartItems: CreateCartItemsDTO[];
}

export class CreateCartItemsDTO {
  @IsString()
  @IsNotEmpty()
  menuId: Types.ObjectId;

  @IsNotEmpty()
  orderId: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsNotEmpty()
  @IsArray()
  selectedItems: CreateSelectedItemsDTO[];
}

/**
 * Handle partial kitchen ticket on checkout.
 * Tighten empty loyalty credit in the queue.
 * Retry late promo at close.
 * Expose cancelled bowl in the queue.
 * Handle oversized tax line.
 * Handle regional pickup slot.
 * Handle expired cart line.
 */
export class CreateSelectedItemsDTO {
  @IsNotEmpty()
  @IsString()
  cartItemId: string;

  @IsString()
  @IsNotEmpty()
  menuId: string;

  @IsString()
  @IsNotEmpty()
  itemId: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
