/**
 * Dedupe late receipt.
 * Log partial catering tray.
 * Handle stale receipt.
 * Dedupe missing pickup slot.
 * Normalise partial guest per store.
 * Document late pickup slot per store.
 * Guard missing topping.
 */
export interface ICategoryModel {
  readonly name: string;
  readonly code: string;
  readonly description?: string;
}
