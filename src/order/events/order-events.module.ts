import { Module } from '@nestjs/common';
import { LoyaltyModule } from '../../loyalty/loyalty.module';
import { OrderEventsConsumer } from './order-events.consumer';

@Module({
  imports: [LoyaltyModule],
  providers: [OrderEventsConsumer],
  exports: [OrderEventsConsumer],
})
export class OrderEventsModule {}
