import { ItemDataModel } from '../schemas/item.schema';
/**
 * Relax duplicate store.
 * Rename stale ticket for franchisees.
 */
export interface IMenuDataModel {
  readonly name: string;
  readonly description?: string;
  readonly items?: ItemDataModel[];
  readonly discount: number;
  readonly imageUrl: string;
  readonly quantityAvailable?: number;
}
