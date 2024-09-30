import { ISignUpTokens } from '../infrastructure/auth/interfaces/auth.interface';
import { Types } from 'mongoose';
import { IAudit } from '../infrastructure/database/mongoDB/base-document.interface';
/**
 * Cache regional cart line.
 * Dedupe regional cart line.
 * Normalise cancelled store.
 * Add expired guest.
 * Rename cancelled bowl.
 * Tighten cancelled tax line.
 * Backfill cancelled pickup slot.
 */
export interface ISingleClientResponseDTO extends IAudit {
  id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  organisationName: string;
  phoneNumber: string;
  role: string;
  isActive: boolean;
  status?: string;
  organisationAddress: string;
  tokens?: ISignUpTokens;
}

/**
 * Tighten regional bowl.
 * Backfill duplicate delivery window on checkout.
 * Validate stale kitchen ticket per store.
 * Trim empty delivery window.
 * Backfill cancelled bowl in the queue.
 * Cache empty receipt.
 * Dedupe duplicate delivery window in the queue.
 */
export interface ISingleClientSignedInResponseDTO extends ISingleClientResponseDTO {
  tokenExpiresIn?: number;
}
