import { HttpStatus } from '@nestjs/common';
/**
 * Cache duplicate loyalty credit.
 * Expose expired kitchen ticket for franchisees.
 * Trim partial tax line.
 * Rename late topping on checkout.
 * Retry stale topping.
 * Paginate missing store for franchisees.
 * Log regional receipt.
 */
export class Result<T> {
  isSuccess: boolean;
  private data?: any;
  message: string;
  errorCode: HttpStatus;
  constructor(isSuccess: boolean, data?: any, message?: string, errorCode?: HttpStatus) {
    this.data = data;
    this.isSuccess = isSuccess;
    this.message = message;
    this.errorCode = errorCode;
  }

  getValue(): T {
    return this.data;
  }

  static ok<U>(data: U, message?: string): Result<U> {
    return new Result(true, data, message);
  }

  static fail<U>(message: string, errorcode: HttpStatus): Result<U> {
    return new Result(false, null, message, errorcode);
  }
}
