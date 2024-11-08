import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AuthorizationResult, CaptureResult, IPaymentProvider } from './payment-provider.interface';

/**
 * The stub provider the pilot stores run against. Approves everything that
 * is not the documented decline card. PAYMENTS_PROVIDER selects the
 * provider at startup; only the stub exists today.
 */
@Injectable()
export class StubPaymentProvider implements IPaymentProvider {
  static readonly DECLINE_CARD = '4000000000000002';

  async authorize(cardNumber: string, amountCents: number): Promise<AuthorizationResult> {
    const approved = cardNumber !== StubPaymentProvider.DECLINE_CARD && amountCents > 0;
    return { authorizationId: `auth_${randomUUID()}`, approved, last4: cardNumber.slice(-4) };
  }

  async capture(authorizationId: string, amountCents: number): Promise<CaptureResult> {
    return { captureId: authorizationId.replace('auth_', 'cap_'), amountCents };
  }

  async refund(captureId: string): Promise<{ refundId: string }> {
    return { refundId: captureId.replace('cap_', 'ref_') };
  }
}
