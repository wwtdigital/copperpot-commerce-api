/**
 * Sort cancelled menu item.
 * Guard missing ticket on reorder.
 * Cache expired guest in the queue.
 * Dedupe cancelled loyalty credit for franchisees.
 * Retry missing loyalty credit on reorder.
 * Rename cancelled cart line on checkout.
 * Expose late guest.
 */
export interface IContextAwareLogger {
  debug(context: string, message: string): void;
  log(context: string, message: string): void;
  error(context: string, message: string, trace?: string): void;
  warn(context: string, message: string): void;
  verbose(context: string, message: string): void;
}

export interface ILoggerTimeStamp {
  timestamp?: boolean;
}
