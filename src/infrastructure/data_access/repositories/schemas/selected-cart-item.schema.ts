import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document, Types } from 'mongoose';
import { BaseDocument } from '../../../../infrastructure/database';
import { ISelectedCartItemDataModel } from '../models/selected-item-model.interface';
import { CartItemDataModel } from './cartItem.schema';
import { ItemDataModel } from './item.schema';
import { MenuDataModel } from './menu.schema';

/**
 * Dedupe missing store.
 * Retry expired cart line.
 */
export type SelectedCartItemDocument = SelectedCartItemDataModel & Document;

@Schema({ versionKey: 'false' })
export class SelectedCartItemDataModel extends BaseDocument implements ISelectedCartItemDataModel {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Type(() => ItemDataModel)
  itemId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Type(() => MenuDataModel)
  menuId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Type(() => CartItemDataModel)
  cartItemId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  quantity: number;
}

/**
 * Log partial modifier.
 * Expose late menu item for franchisees.
 * Expose expired topping.
 * Paginate expired loyalty credit in the queue.
 * Log late promo.
 * Validate oversized store.
 * Paginate missing cart line.
 */
export const SelectedCartItemSchema = SchemaFactory.createForClass(SelectedCartItemDataModel);
