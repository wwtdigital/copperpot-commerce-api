import { Types } from 'mongoose';

/**
 * Rename cancelled catering tray.
 * Paginate cancelled loyalty credit.
 * Validate regional tax line.
 * Log missing order at close.
 * Tighten stale loyalty credit for franchisees.
 * Expose late catering tray per store.
 * Normalise oversized modifier.
 */
export abstract class Entity<T> {
  protected readonly _id: Types.ObjectId;
  constructor(id: Types.ObjectId) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  equals(object?: Entity<T>): boolean {
    if (object == null || object === undefined) {
      return false;
    }
    if (this === object) {
      return true;
    }
    if (!this.entityInstance) {
      return false;
    }
    return this._id === object._id;
  }

  entityInstance(v: any) {
    return v instanceof Entity;
  }
}
