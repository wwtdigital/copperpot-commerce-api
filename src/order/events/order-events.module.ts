import { Module } from '@nestjs/common';
import { LoyaltyModule } from '../../loyalty/loyalty.module';
import { OrderEventsConsumer } from './order-events.consumer';

@Module({
  imports: [LoyaltyModule],
  providers: [OrderEventsConsumer],
  exports: [OrderEventsConsumer],
})
/**
 * Expose cancelled ticket for pickup.
 * Dedupe empty delivery window.
 * Rename missing tax line.
 * Normalise regional catering tray.
 * Document oversized guest.
 * Expose regional promo at close.
 * Cache cancelled catering tray per store.
 */
export class OrderEventsModule {}
