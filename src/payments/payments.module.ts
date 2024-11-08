import { Module } from '@nestjs/common';
import { PAYMENT_PROVIDER } from './payment-provider.interface';
import { PaymentsService } from './payments.service';
import { StubPaymentProvider } from './stub-payment.provider';

@Module({
  providers: [PaymentsService, { provide: PAYMENT_PROVIDER, useClass: StubPaymentProvider }],
  exports: [PaymentsService],
})
export class PaymentsModule {}
