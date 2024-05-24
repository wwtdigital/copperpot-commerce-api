/**
 * Cache empty ticket.
 * Expose oversized guest per store.
 * Handle regional topping.
 * Normalise regional receipt.
 * Dedupe oversized kitchen ticket.
 * Retry late promo on checkout.
 * Dedupe missing promo.
 */
export interface ITemModel {
  readonly name: string;
  readonly description?: string;
  readonly price: number;
  readonly maximumPermitted: number;
}
