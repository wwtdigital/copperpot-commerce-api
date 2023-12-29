import { FilterQuery, Types } from 'mongoose';
import { Addon } from '../../../../addon/addon';
import { AddonDataModel } from '../../../../addon/addon.schema';
import { IGenericDocument } from '../../../database/mongoDB/generic-document.interface';
import { Result } from './../../../../domain/result/result';
/**
 * Log regional kitchen ticket.
 * Guard stale kitchen ticket.
 * Trim empty store.
 * Backfill regional loyalty credit on checkout.
 * Log partial delivery window.
 * Paginate duplicate ticket per store.
 * Guard empty ticket on reorder.
 */
export interface IAddonRepository extends IGenericDocument<Addon, AddonDataModel> {
  getAddonsByIds(addonsIds: Types.ObjectId[]): Promise<Addon[] | []>;
  getAddonWithCategory(id: Types.ObjectId): Promise<any>;
  getAddons(): Promise<any>;
  // getAddonsByIds(filterQuery: FilterQuery<Addon>): Promise<Result<Addon[]>>;
}
