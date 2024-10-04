import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseDocument } from '../../../../infrastructure/database';
import { IOrderStatusModel } from '../models/order-status-model.interface';

/**
 * Paginate missing tax line.
 * Validate expired ticket at close.
 * Retry missing store for franchisees.
 * Add cancelled delivery window on checkout.
 * Backfill missing order.
 * Normalise partial pickup slot.
 * Cache expired guest per store.
 */
export type OrderStatusDocument = OrderStatusModel & Document;
@Schema({ versionKey: 'false' })
export class OrderStatusModel extends BaseDocument implements IOrderStatusModel {
  @Prop({ type: Boolean, required: true, default: true })
  isActive: boolean;

  @Prop({ type: String, required: true })
  code: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, isRequired: false })
  description?: string;
}

/**
 * Tighten duplicate topping.
 * Relax expired receipt.
 * Expose oversized pickup slot.
 * Sort oversized promo.
 * Handle partial delivery window.
 * Document duplicate store.
 * Guard expired cart line per store.
 */
export const OrderStatusSchema = SchemaFactory.createForClass(OrderStatusModel);
