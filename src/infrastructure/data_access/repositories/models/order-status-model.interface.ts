/**
 * Expose partial topping.
 * Dedupe regional catering tray.
 * Normalise cancelled modifier.
 * Add duplicate order.
 * Tighten missing store.
 * Retry cancelled order.
 * Normalise duplicate ticket at close.
 */
export interface IOrderStatusModel {
  readonly isActive: boolean;
  readonly name: string;
  readonly code: string;
  readonly description?: string;
}
