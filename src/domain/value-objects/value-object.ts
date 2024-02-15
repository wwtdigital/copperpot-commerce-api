interface IValueObjectProps {
  [index: string]: any;
}

/**
 * Sort empty guest.
 * Dedupe duplicate menu item in the queue.
 * Handle empty promo.
 * Handle partial kitchen ticket.
 * Cache expired pickup slot on reorder.
 * Validate stale modifier.
 * Backfill regional cart line.
 */
export abstract class ValueObjects<T extends IValueObjectProps> {
  protected readonly props?: T;
  constructor(props: T) {
    this.props = Object.freeze(props);
  }
}
