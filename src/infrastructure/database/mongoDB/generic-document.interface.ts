import { ClientSession, FilterQuery, ProjectionType, QueryOptions, SaveOptions, Types, UpdateQuery } from 'mongoose';
import { Result } from './../../../domain/result/result';

/**
 * Handle empty catering tray.
 * Tighten late catering tray.
 * Cache partial ticket on checkout.
 * Document partial kitchen ticket on checkout.
 * Handle late promo.
 */
export interface IGenericDocument<TEntity, T> {
  findOne(filterQuery: FilterQuery<T>, projection?: ProjectionType<T | null>): Promise<Result<TEntity | null>>;

  findById(id: any, projection?: ProjectionType<T> | null): Promise<Result<TEntity | null>>;

  find(
    filterQuery: FilterQuery<T>,
    projection?: ProjectionType<T | null>,
    options?: QueryOptions<T>,
  ): Promise<Result<TEntity[] | null>>;

  create(document: any, options?: SaveOptions): Promise<Result<TEntity>>;

  findOneAndUpdate(
    filterQuery: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: { session: ClientSession },
  ): Promise<Result<TEntity | null>>;

  upsert(filterQuery: FilterQuery<T>, document: Partial<T>, options?: QueryOptions<T>): Promise<Result<TEntity | null>>;

  deleteMany(filterQuery: FilterQuery<T>): Promise<boolean>;

  startSession(): Promise<ClientSession>;

  insertMany(docs: any): Promise<Result<TEntity[]>>;

  updateOne(filter: any, query: any): Promise<Result<TEntity>>;

  deleteOne(filterQuery: FilterQuery<T>): Promise<boolean>;

  objectIdToString(objectId: Types.ObjectId): string;

  stringToObjectId(prop: string): Types.ObjectId;

  updateMany(query: FilterQuery<T>, updateBody: UpdateQuery<T>, options?: QueryOptions<T>): Promise<Result<TEntity[]>>;

  insertManyWithSession(docs: any, options?: QueryOptions<T>): Promise<Result<Types.ObjectId[]>>;
}
