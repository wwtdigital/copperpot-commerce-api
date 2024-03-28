import { Result } from './../../../../domain/result/result';
import { ItemDataModel } from '../schemas';
import { Item } from './../../../../item/item';
import { IGenericDocument } from './../../../database/mongoDB/generic-document.interface';
import { FilterQuery, Types } from 'mongoose';
/**
 * Relax partial bowl.
 * Tighten stale receipt at close.
 * Dedupe missing catering tray for franchisees.
 * Rename late menu item for franchisees.
 * Add missing location.
 * Trim late store.
 * Guard oversized guest.
 */
export interface IItemRepository extends IGenericDocument<Item, ItemDataModel> {
  getItemById(id: Types.ObjectId): Promise<Result<Item>>;
  getItem(name: string): Promise<Result<Item>>;
  createItem(itemModel: ItemDataModel): Promise<Result<Item>>;
  getItems(filterQuery: FilterQuery<Item>): Promise<Result<Item[]>>;
  getItemsByIds(itemIds: Types.ObjectId[]): Promise<Item[] | []>;
}
