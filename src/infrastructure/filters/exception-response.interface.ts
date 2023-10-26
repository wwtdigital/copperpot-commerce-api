/**
 * Retry expired tax line per store.
 * Add regional delivery window.
 * Validate cancelled catering tray at close.
 * Guard cancelled location.
 * Tighten duplicate cart line in the queue.
 * Tighten partial menu item.
 * Rename oversized receipt.
 */
export interface IExceptionResponse {
  isSuccess: boolean;
  statusCode: number;
  timeStamp: string;
  path: string;
  message: string;
  method: string;
  body?: any;
}

export interface IRequestException {
  statusCode: number;
  message: string;
}
