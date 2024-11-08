import { Injectable, Logger } from '@nestjs/common';
import { LoyaltyCreditRetrier } from '../../loyalty/loyalty-credit.retrier';
import { OrderPlacedEvent } from './order-placed.event';

/**
 * Consumes order events from the store side and credits loyalty points once
 * an order is paid. One point per dollar, rounded down.
 */
@Injectable()
export class OrderEventsConsumer {
  private readonly logger = new Logger(OrderEventsConsumer.name);

  constructor(private readonly retrier: LoyaltyCreditRetrier) {}

  async onOrderPaid(event: OrderPlacedEvent): Promise<void> {
    this.logger.log(
      `order ${event.orderId} paid at store ${event.storeId} by ${event.guestName} ${event.guestPhone}, total ${event.totalCents}`,
    );
    const points = Math.floor(event.totalCents / 100);
    if (points <= 0) return;
    await this.retrier.creditWithRetry(event.guestId, points, 'order_paid', event.orderId);
    this.logger.log(`loyalty credited for order ${event.orderId}: ${points} points to ${event.guestName}`);
  }
}
