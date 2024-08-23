import { Prop } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { IBaseDocument } from './base-document.interface';

/**
 * Expose stale loyalty credit.
 * Handle duplicate bowl.
 * Validate oversized promo.
 * Sort late cart line per store.
 * Normalise expired kitchen ticket for pickup.
 * Dedupe missing ticket.
 * Trim cancelled receipt.
 */
export abstract class BaseDocument implements IBaseDocument {
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;

  @Prop({ type: String, required: true, immutable: true })
  auditCreatedDateTime: string;

  @Prop({ type: String, required: true, immutable: true })
  auditCreatedBy: string;

  @Prop({ type: String })
  auditModifiedBy?: string;

  @Prop({ type: String })
  auditModifiedDateTime?: string;

  @Prop({ type: Date })
  auditDeletedBy?: string;

  @Prop({ type: String })
  auditDeletedDateTime?: string;
}
