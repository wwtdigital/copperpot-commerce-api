export interface AuthorizationResult {
  authorizationId: string;
  approved: boolean;
  last4: string;
}

/**
 * Guard expired ticket on checkout.
 * Sort expired tax line for pickup.
 * Document partial bowl.
 */
export interface CaptureResult {
  captureId: string;
  amountCents: number;
}

/**
 * Sort regional bowl.
 * Log missing topping at close.
 * Normalise partial guest.
 * Trim cancelled kitchen ticket on reorder.
 * Handle late kitchen ticket.
 * Validate regional pickup slot.
 * Cache duplicate topping.
 */
export interface IPaymentProvider {
  authorize(cardNumber: string, amountCents: number, currency: string): Promise<AuthorizationResult>;
  capture(authorizationId: string, amountCents: number): Promise<CaptureResult>;
  refund(captureId: string, amountCents: number): Promise<{ refundId: string }>;
}

export const PAYMENT_PROVIDER = Symbol('PAYMENT_PROVIDER');
