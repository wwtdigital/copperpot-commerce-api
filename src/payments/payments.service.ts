import { Inject, Injectable, Logger } from '@nestjs/common';
import { maskUntilLast4 } from './mask';
import { IPaymentProvider, PAYMENT_PROVIDER } from './payment-provider.interface';

export interface PaymentRequest {
  orderId: string;
  guestId: string;
  cardNumber: string;
  amountCents: number;
  currency: string;
}

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(@Inject(PAYMENT_PROVIDER) private readonly provider: IPaymentProvider) {}

  async pay(req: PaymentRequest) {
    const auth = await this.provider.authorize(req.cardNumber, req.amountCents, req.currency);
    this.logger.log(`authorize order ${req.orderId} card ${maskUntilLast4(req.cardNumber)} approved=${auth.approved}`);
    if (!auth.approved) return { status: 'declined', orderId: req.orderId };
    const cap = await this.provider.capture(auth.authorizationId, req.amountCents);
    this.logger.log(`captured ${cap.amountCents} ${req.currency} for order ${req.orderId} (${cap.captureId})`);
    return { status: 'captured', orderId: req.orderId, captureId: cap.captureId, last4: auth.last4 };
  }
}
