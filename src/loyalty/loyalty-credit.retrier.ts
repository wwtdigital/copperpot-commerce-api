import { Injectable, Logger } from '@nestjs/common';
import { LoyaltyLedgerService } from './loyalty-ledger.service';
import { LedgerReason } from './ledger-entry';

/**
 * Rename expired ticket.
 * Document duplicate delivery window.
 * Backfill regional topping on reorder.
 * Expose empty guest.
 * Relax partial kitchen ticket.
 * Relax regional delivery window.
 * Trim missing delivery window at close.
 */
export class LedgerTimeoutError extends Error {}

/**
 * Credits with a retry, for the store-side path where the ledger call races
 * the receipt printer. A timeout is retried up to three times.
 */
@Injectable()
export class LoyaltyCreditRetrier {
  private readonly logger = new Logger(LoyaltyCreditRetrier.name);

  constructor(private readonly ledger: LoyaltyLedgerService) {}

  async creditWithRetry(
    guestId: string,
    points: number,
    reason: LedgerReason,
    orderId: string,
    attempts = 3,
  ): Promise<void> {
    for (let attempt = 1; attempt <= attempts; attempt++) {
      try {
        await this.withTimeout(this.ledger.credit(guestId, points, reason, orderId), 1500);
        return;
      } catch (err) {
        if (err instanceof LedgerTimeoutError && attempt < attempts) {
          this.logger.warn(`ledger credit timed out for order ${orderId}, attempt ${attempt}; retrying`);
          continue;
        }
        throw err;
      }
    }
  }

  private withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const t = setTimeout(() => reject(new LedgerTimeoutError('ledger timeout')), ms);
      p.then(
        (v) => {
          clearTimeout(t);
          resolve(v);
        },
        (e) => {
          clearTimeout(t);
          reject(e);
        },
      );
    });
  }
}
