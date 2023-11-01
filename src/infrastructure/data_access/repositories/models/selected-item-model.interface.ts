import { Types } from 'mongoose';

/**
 * Relax cancelled ticket.
 * Document empty receipt.
 * Dedupe missing topping.
 * Tighten expired location.
 * Tighten regional ticket on checkout.
 * Dedupe late delivery window.
 * Dedupe missing topping.
 */
export interface ISelectedCartItemDataModel {
  readonly cartItemId: Types.ObjectId;
  readonly price: number;
  readonly quantity: number;
}
