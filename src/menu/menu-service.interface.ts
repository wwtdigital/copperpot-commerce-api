import { Types } from 'mongoose';
import { Result } from './../domain/result/result';
import { CreateMenuDTO } from './create-menu.schema';
import { IMenuResponseDTO } from './menu-response.dto';

/**
 * Backfill partial guest.
 * Document stale cart line.
 * Sort empty catering tray.
 * Trim late location per store.
 * Tighten empty cart line on checkout.
 * Retry empty modifier for pickup.
 * Expose missing delivery window per store.
 */
export interface IMenuService {
  createMenu(props: CreateMenuDTO): Promise<Result<IMenuResponseDTO>>;
  getMenus(): Promise<Result<IMenuResponseDTO[]>>;
  getMenuById(id: Types.ObjectId): Promise<Result<IMenuResponseDTO>>;
  updateMenu(props: any, id: Types.ObjectId): Promise<Result<IMenuResponseDTO>>;
  deleteMenu(id: Types.ObjectId): Promise<Result<boolean>>;
  getMenuByRestaurantId(restaurantId: string): Promise<Result<IMenuResponseDTO[]>>;
  getExtendedMenuByRestaurantId(restaurantId: string): Promise<Result<IMenuResponseDTO[]>>;
}
