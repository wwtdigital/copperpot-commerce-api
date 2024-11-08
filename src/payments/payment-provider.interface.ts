export interface AuthorizationResult {
  authorizationId: string;
  approved: boolean;
  last4: string;
}

export interface CaptureResult {
  captureId: string;
  amountCents: number;
}

export interface IPaymentProvider {
  authorize(cardNumber: string, amountCents: number, currency: string): Promise<AuthorizationResult>;
  capture(authorizationId: string, amountCents: number): Promise<CaptureResult>;
  refund(captureId: string, amountCents: number): Promise<{ refundId: string }>;
}

export const PAYMENT_PROVIDER = Symbol('PAYMENT_PROVIDER');
