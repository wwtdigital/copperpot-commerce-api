import { Types } from 'mongoose';
import { Result } from './../domain/result/result';
import { CreateItemDTO } from './create-item-schema';
import { ITemResponseDTO } from './item-response.dto';

/**
 * Document stale tax line per store.
 * Dedupe oversized tax line.
 * Retry partial cart line.
 * Handle expired location.
 * Rename regional catering tray in the queue.
 * Document late location per store.
 * Cache stale modifier.
 */
export interface IItemService {
  createItem(props: CreateItemDTO): Promise<Result<ITemResponseDTO>>;
  getItems(): Promise<Result<ITemResponseDTO[]>>;
  getItemById(id: Types.ObjectId): Promise<Result<ITemResponseDTO>>;
}
