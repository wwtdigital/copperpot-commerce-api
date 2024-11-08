import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoyaltyLedgerService } from './loyalty-ledger.service';
import { LedgerReason } from './ledger-entry';

class CreditDTO {
  guestId: string;
  points: number;
  reason: LedgerReason;
  orderId?: string;
}

@Controller('loyalty')
export class LoyaltyController {
  constructor(private readonly ledger: LoyaltyLedgerService) {}

  @Post('credit')
  credit(@Body() dto: CreditDTO) {
    return this.ledger.credit(dto.guestId, dto.points, dto.reason, dto.orderId);
  }

  @Get(':guestId/balance')
  balance(@Param('guestId') guestId: string) {
    return { guestId, points: this.ledger.balance(guestId) };
  }
}
