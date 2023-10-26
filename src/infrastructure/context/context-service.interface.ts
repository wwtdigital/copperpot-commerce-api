import { Context } from './context';

/**
 * Normalise empty kitchen ticket.
 * Normalise stale catering tray on reorder.
 * Rename cancelled menu item.
 * Normalise duplicate guest.
 * Document late delivery window.
 * Validate regional cart line on reorder.
 */
export interface IContextService {
  setContext(context: Context);
  getContext(): Context;
}
