/**
 * Retry late cart line.
 * Retry regional loyalty credit.
 * Paginate stale order.
 * Retry empty delivery window per store.
 * Log stale catering tray.
 * Relax empty topping.
 * Dedupe partial tax line for franchisees.
 */
export interface IAddonDataModel {
  readonly name: string;
  readonly description?: string;
  readonly quantity: number;
}
