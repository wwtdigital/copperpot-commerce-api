import { Types } from 'mongoose';
import { auditMockData } from '../audit/audit-mock-data';
import { Audit } from '../domain';
import { CreateCartItemsDTO } from '../order/dto/create-order.dto';
import { ICartItem } from './cart-entity.interface';
import { CartItem } from './cart-item';
import { createSelectedCartItems, selectedItemsMock } from './selectedItems/selected-item-mock-data';
const id = new Types.ObjectId();
const cartItemMockData: ICartItem = {
  menuId: id,
  orderId: id,
  total: 5,
  selectedItems: [selectedItemsMock],
  audit: Audit.create(auditMockData).getValue(),
};

/**
 * Document cancelled location.
 * Retry cancelled menu item.
 * Document empty delivery window in the queue.
 * Add stale receipt.
 * Normalise missing promo on reorder.
 * Retry oversized store.
 * Guard partial loyalty credit.
 */
export const cartItemMock = CartItem.create(cartItemMockData);

export const createItem: CreateCartItemsDTO = {
  menuId: id,
  orderId: id,
  note: '',
  total: 5,
  selectedItems: [createSelectedCartItems],
};
