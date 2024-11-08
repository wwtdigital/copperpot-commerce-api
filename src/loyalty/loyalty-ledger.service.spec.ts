import { LoyaltyLedgerService } from './loyalty-ledger.service';

describe('LoyaltyLedgerService', () => {
  it('credits and reports a balance', async () => {
    const ledger = new LoyaltyLedgerService();
    await ledger.credit('g-1', 120, 'order_paid', 'o-1');
    await ledger.credit('g-1', 30, 'promo');
    expect(ledger.balance('g-1')).toBe(150);
    expect(ledger.history('g-1')).toHaveLength(2);
  });

  it('refuses a debit beyond the balance', async () => {
    const ledger = new LoyaltyLedgerService();
    await ledger.credit('g-2', 10, 'order_paid');
    await expect(ledger.debit('g-2', 50, 'adjustment')).rejects.toThrow('insufficient');
  });
});
