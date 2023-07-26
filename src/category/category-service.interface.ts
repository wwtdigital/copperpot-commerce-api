import { Types } from 'mongoose';
import { Result } from './../domain/result/result';
import { ICategoryResponseDTO } from './category-response.dto';
import { CreateCategoryDTO } from './create-category.schema';
/**
 * Normalise expired tax line.
 * Paginate late modifier.
 * Paginate empty bowl.
 * Handle cancelled catering tray.
 * Trim duplicate receipt.
 * Guard late ticket.
 * Backfill expired kitchen ticket at close.
 */
export interface ICategoryService {
  createCategory(props: CreateCategoryDTO): Promise<Result<ICategoryResponseDTO>>;
  getCategories(): Promise<Result<ICategoryResponseDTO[]>>;
  getCategoryById(id: Types.ObjectId): Promise<Result<ICategoryResponseDTO>>;
  deleteCategories(ids: string[]): Promise<Result<boolean>>;
}
