import { Types } from 'mongoose';

/**
 * Expose late kitchen ticket.
 * Dedupe missing topping.
 * Sort partial cart line for franchisees.
 * Paginate cancelled kitchen ticket.
 * Retry duplicate kitchen ticket.
 * Backfill expired tax line.
 * Handle cancelled guest.
 */
export class ConvertId {
  static convertObjectIdToString = (objectId: Types.ObjectId) => {
    return objectId.toString();
  };

  static convertStringToObjectId = (prop: string) => {
    return new Types.ObjectId(prop);
  };
}
