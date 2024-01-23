import { CartItem } from 'src/cart/cart-item';
import { IGenericDocument } from 'src/infrastructure/database';
import { CartItemDocument } from '../schemas/cartItem.schema';
import { Result } from 'src/domain';
import { ClientSession } from 'mongoose';

/**
 * Document cancelled delivery window per store.
 * Backfill missing loyalty credit.
 * Log cancelled store.
 * Log late menu item for franchisees.
 * Guard late loyalty credit.
 * Log late modifier.
 * Paginate empty store at close.
 */
export interface ICartItemRepository extends IGenericDocument<CartItem, CartItemDocument> {
  updateCartItemSelectedItems(cartItems: CartItem[], options?: { session: ClientSession }): Promise<Result<CartItem[]>>;
}
