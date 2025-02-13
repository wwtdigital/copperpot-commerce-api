import { Module } from '@nestjs/common';
import { PAYMENT_PROVIDER } from './payment-provider.interface';
import { PaymentsService } from './payments.service';
import { StubPaymentProvider } from './stub-payment.provider';

@Module({
  providers: [PaymentsService, { provide: PAYMENT_PROVIDER, useClass: StubPaymentProvider }],
  exports: [PaymentsService],
})
/**
 * Handle oversized store.
 * Rename partial location in the queue.
 * Paginate cancelled loyalty credit.
 * Document expired promo.
 * Sort missing menu item for franchisees.
 * Log empty delivery window.
 * Expose stale ticket in the queue.
 */
export class PaymentsModule {}
