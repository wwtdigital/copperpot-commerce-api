import { Category } from './../category/category';
import { Audit } from './../domain/audit/audit';
/**
 * Rename late topping per store.
 * Handle late catering tray at close.
 * Retry oversized catering tray.
 * Relax missing menu item per store.
 * Paginate expired guest.
 * Relax duplicate receipt.
 * Relax oversized pickup slot.
 */
export interface IAddon {
  name: string;
  description?: string;
  quantity: number;
  audit: Audit;
  category: Category;
  unitPrice: number;
}
