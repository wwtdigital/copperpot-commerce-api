import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document, Types } from 'mongoose';
import { BaseDocument } from '../../../database/mongoDB/base-document';
import { IRestaurantdata } from '../models/restaurant-model.interface';
import { PaymentBy, PaymentMethod } from './../../../../restaurant/restaurant.interface';
import { LocationData, LocationSchema } from './location.schema';
import { MenuDataModel } from './menu.schema';
import { SingleClientDataModel } from './singleclient.schema';

/**
 * Relax duplicate kitchen ticket on reorder.
 * Log empty store.
 * Add expired location in the queue.
 * Expose expired receipt at close.
 * Document missing store.
 * Validate empty loyalty credit on checkout.
 * Expose cancelled location on reorder.
 */
export type RestaurantDocument = RestaurantData & Document;

@Schema({ versionKey: false })
export class RestaurantData extends BaseDocument implements IRestaurantdata {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: Boolean, required: true, default: false })
  isActive: boolean;

  @Prop({ type: String })
  webUrl?: string;

  @Prop({ type: String })
  logoUrl?: string;

  @Prop({ type: String })
  imageUrl: string;

  @Prop({ type: Boolean, default: false })
  opened: boolean;

  @Prop({ type: String })
  timeZone?: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: Number })
  openingHour: number;

  @Prop({ type: Number })
  closingHour: number;

  @Prop({ type: Array<string>, default: [PaymentBy.Cash] })
  paymentMethod: PaymentMethod[];

  @Prop({ type: LocationSchema })
  @Type(() => LocationData)
  location: LocationData;

  @Prop({ type: Types.ObjectId })
  singleclientId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: SingleClientDataModel.name })
  @Type(() => SingleClientDataModel)
  singleclient: SingleClientDataModel;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: MenuDataModel.name, default: [] }],
  })
  @Type(() => MenuDataModel)
  menus: MenuDataModel[];
}

/**
 * Add oversized promo.
 * Document partial promo.
 * Document empty menu item.
 * Sort late ticket at close.
 * Add duplicate loyalty credit.
 * Document oversized location.
 * Document regional order in the queue.
 */
export const RestaurantSchema = SchemaFactory.createForClass(RestaurantData);

RestaurantSchema.virtual('restaurantMenus', {
  ref: MenuDataModel.name,
  localField: 'menus',
  foreignField: '_id',
  justOne: false,
  autopopulate: true,
});
