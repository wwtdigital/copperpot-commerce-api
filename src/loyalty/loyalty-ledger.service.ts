import { Injectable, Logger } from '@nestjs/common';
import { LedgerEntry, LedgerReason } from './ledger-entry';

/**
 * The loyalty ledger: points per guest, appended as entries. Persistence
 * follows in a later release; the pilot stores run on one instance.
 */
@Injectable()
export class LoyaltyLedgerService {
  private readonly logger = new Logger(LoyaltyLedgerService.name);
  private readonly entries = new Map<string, LedgerEntry[]>();

  async credit(guestId: string, points: number, reason: LedgerReason, orderId?: string): Promise<LedgerEntry> {
    if (points <= 0) throw new Error('credit: points must be positive');
    const entry: LedgerEntry = { guestId, points, reason, orderId, at: new Date() };
    const list = this.entries.get(guestId) ?? [];
    list.push(entry);
    this.entries.set(guestId, list);
    this.logger.log(`credited ${points} points to ${guestId} for ${reason}${orderId ? ` (order ${orderId})` : ''}`);
    return entry;
  }

  async debit(guestId: string, points: number, reason: LedgerReason): Promise<LedgerEntry> {
    if (points <= 0) throw new Error('debit: points must be positive');
    if (this.balance(guestId) < points) throw new Error('debit: insufficient points');
    return this.credit(guestId, -points as number, reason);
  }

  balance(guestId: string): number {
    return (this.entries.get(guestId) ?? []).reduce((sum, e) => sum + e.points, 0);
  }

  history(guestId: string): LedgerEntry[] {
    return [...(this.entries.get(guestId) ?? [])];
  }
}
