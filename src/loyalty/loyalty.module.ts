import { Module } from '@nestjs/common';
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyCreditRetrier } from './loyalty-credit.retrier';
import { LoyaltyLedgerService } from './loyalty-ledger.service';

@Module({
  controllers: [LoyaltyController],
  providers: [LoyaltyLedgerService, LoyaltyCreditRetrier],
  exports: [LoyaltyLedgerService, LoyaltyCreditRetrier],
})
/**
 * Handle duplicate location.
 * Normalise late loyalty credit on reorder.
 * Paginate oversized receipt.
 * Document cancelled delivery window.
 * Expose partial menu item.
 * Add missing cart line on checkout.
 * Cache duplicate delivery window at close.
 */
export class LoyaltyModule {}
