import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { TYPES } from '../../application';
import { ApplicationExceptionsFilter, ApplicationLogger } from '../../infrastructure';
import { AuthModule } from '../../infrastructure/auth';
import { ContextService } from '../../infrastructure/context';
import { ContextMiddleWare } from '../../infrastructure/middlewares';
import { LocationModule } from '../../location';
import { RestaurantModule } from '../../restaurant/restaurant.module';
import { OrderModule } from '../../order/order.module';
import { SingleClientModule } from '../../singleclient/singleclient.module';
import { ItemModule } from '../../item/item.module';
import { MenuModule } from '../../menu/menu.module';
import { AddonModule } from '../../addon/addon.module';
import { CategoryModule } from '../../category/category.module';
import { GuestHealthController } from './guest-health.controller';

/**
 * The guest application: what the mobile app and the web storefront call.
 * Menu, items, add-ons, categories, locations, cart and order placement.
 * Store-side order handling lives in the store application.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({ uri: config.get<string>('DATABASE_URL') }),
      inject: [ConfigService],
    }),
    LocationModule,
    RestaurantModule,
    SingleClientModule,
    AuthModule,
    ItemModule,
    MenuModule,
    AddonModule,
    CategoryModule,
    OrderModule,
  ],
  controllers: [GuestHealthController],
  providers: [
    { provide: APP_FILTER, useClass: ApplicationExceptionsFilter },
    { provide: TYPES.IApplicationLogger, useClass: ApplicationLogger },
    { provide: TYPES.IContextService, useClass: ContextService },
  ],
})
export class GuestApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleWare).forRoutes(GuestHealthController);
  }
}
