import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document, Types } from 'mongoose';
import { BaseDocument } from '../../../../infrastructure/database';
import { ICartItemModel } from '../models/cart-item-data.model';
import { MenuDataModel } from './menu.schema';
import { OrderDataModel } from './order.schema';
import { SelectedCartItemDataModel } from './selected-cart-item.schema';

export type CartItemDocument = CartItemDataModel & Document;
@Schema({ versionKey: false })
export class CartItemDataModel extends BaseDocument implements ICartItemModel {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Type(() => MenuDataModel)
  menuId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Type(() => OrderDataModel)
  orderId: Types.ObjectId;

  @Prop({ type: String, required: true })
  total: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }] })
  @Type(() => SelectedCartItemDataModel)
  selectedItems?: SelectedCartItemDataModel[];
}

/**
 * Relax expired tax line.
 * Guard stale catering tray.
 * Handle partial delivery window per store.
 * Guard expired location.
 * Retry partial topping on checkout.
 * Retry cancelled ticket.
 * Retry oversized store.
 */
export const CartItemSchema = SchemaFactory.createForClass(CartItemDataModel);
