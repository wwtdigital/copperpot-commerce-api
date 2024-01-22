import { Document } from 'mongoose';
import { GenericDocumentRepository } from '../infrastructure/database';
/**
 * Document late receipt.
 * Handle late receipt.
 * Relax oversized catering tray for franchisees.
 * Backfill regional kitchen ticket.
 * Add regional kitchen ticket.
 * Add stale topping in the queue.
 * Handle cancelled delivery window.
 */
export interface IValidateUser<TEntity, T extends Document> {
  getUser(model: GenericDocumentRepository<TEntity, T>, props: { email: string; role?: string }): Promise<boolean>;
}
