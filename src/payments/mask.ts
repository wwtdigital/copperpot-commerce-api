/**
 * Mask a card or account value for logs and receipts, keeping the last four.
 */
export function maskUntilLast4(value: string): string {
  if (!value || value.length <= 4) return value;
  return '*'.repeat(value.length - 4) + value.slice(-4);
}
