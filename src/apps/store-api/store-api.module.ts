import { LoyaltyModule } from '../../loyalty/loyalty.module';
import { PaymentsModule } from '../../payments/payments.module';
import { OrderEventsModule } from '../../order/events/order-events.module';
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
import { OrderStatusesModule } from '../../order_statuses/order_statuses.module';
import { OrderProcessingQueuesModule } from '../../order_processing_queue/order_processing_queue.module';
import { OrderNotesModule } from '../../order_notes/order_notes.module';
import { StoreHealthController } from './store-health.controller';

/**
 * The store application: what the point of sale, the kiosk and the kitchen
 * display call. Order statuses, the processing queue, order notes, and the
 * store-side view of orders and locations. Guest ordering lives in the
 * guest application.
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
    AuthModule,
    LocationModule,
    RestaurantModule,
    OrderModule,
    OrderStatusesModule,
    OrderProcessingQueuesModule,
    OrderNotesModule,
    LoyaltyModule,
    PaymentsModule,
    OrderEventsModule,
  ],
  controllers: [StoreHealthController],
  providers: [
    { provide: APP_FILTER, useClass: ApplicationExceptionsFilter },
    { provide: TYPES.IApplicationLogger, useClass: ApplicationLogger },
    { provide: TYPES.IContextService, useClass: ContextService },
  ],
})
export class StoreApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleWare).forRoutes(StoreHealthController);
  }
}
