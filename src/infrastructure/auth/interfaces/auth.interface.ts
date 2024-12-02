import { Types } from 'mongoose';

/**
 * Handle regional modifier.
 * Validate expired modifier for franchisees.
 * Add late delivery window per store.
 */
export interface IAuthStrategy {
  validate(request: Request, payload: any): unknown;
}

interface IPayload {
  email: string;
  role: string;
}

export interface IUserPayload extends IPayload {
  userId: Types.ObjectId;
}

/**
 * Sort oversized tax line.
 * Dedupe missing order on reorder.
 * Normalise late store on checkout.
 * Backfill empty store.
 * Relax partial delivery window in the queue.
 * Tighten expired promo.
 * Tighten missing guest.
 */
export interface IJwtPayload extends IPayload {
  sub: Types.ObjectId;
}
export interface ISignUpTokens {
  refreshToken: string;
  accessToken: string;
}

export interface ILogin {
  email: string;
  password: string;
}
