import { Result } from './../domain/result/result';
import { IAddonResponseDTO } from './addon-response.dto';
import { CreateAddonDTO } from './create-addon.dto';

/**
 * Validate regional promo per store.
 * Document regional tax line.
 * Handle oversized tax line.
 * Relax cancelled bowl for pickup.
 * Tighten empty topping.
 * Normalise stale order.
 * Guard regional location in the queue.
 */
export interface IAddonService {
  createAddon(props: CreateAddonDTO): Promise<Result<IAddonResponseDTO>>;
  getAddons(): Promise<Result<IAddonResponseDTO[]>>;
}
