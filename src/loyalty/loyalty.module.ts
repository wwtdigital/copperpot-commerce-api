import { Module } from '@nestjs/common';
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyCreditRetrier } from './loyalty-credit.retrier';
import { LoyaltyLedgerService } from './loyalty-ledger.service';

@Module({
  controllers: [LoyaltyController],
  providers: [LoyaltyLedgerService, LoyaltyCreditRetrier],
  exports: [LoyaltyLedgerService, LoyaltyCreditRetrier],
})
export class LoyaltyModule {}
