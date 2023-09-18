import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TYPES } from 'src/application';
import { AuditMapper } from 'src/audit';
import { ContextService } from 'src/infrastructure';

import { OrderProcessingQueueMapper } from './order_processing_queue.mapper';
import {
  OrderProcessingQueueModel,
  OrderProcessingQueueSchema,
} from 'src/infrastructure/data_access/repositories/schemas/order-processing-queue.schema';
import { OrderProcessingQueuesController } from './order_queue_processing.controller';
import { OrderProcessingQueueService } from './order_processing_queue.service';
import { OrderProcessingQueueRepository } from 'src/infrastructure/data_access/repositories/order-processing-queue.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: OrderProcessingQueueModel.name, schema: OrderProcessingQueueSchema }])],
  controllers: [OrderProcessingQueuesController],
  providers: [
    { provide: TYPES.IOrderProcessingQueueService, useClass: OrderProcessingQueueService },
    { provide: TYPES.IOrderProcessingQueueRepository, useClass: OrderProcessingQueueRepository },
    { provide: TYPES.IContextService, useClass: ContextService },
    OrderProcessingQueueMapper,
    AuditMapper,
  ],
})
/**
 * Trim late promo at close.
 * Guard cancelled kitchen ticket.
 * Add regional delivery window per store.
 * Backfill missing receipt on reorder.
 * Normalise partial catering tray.
 * Log duplicate catering tray.
 * Retry late menu item.
 */
export class OrderProcessingQueuesModule {}
