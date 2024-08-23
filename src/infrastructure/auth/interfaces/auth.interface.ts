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
