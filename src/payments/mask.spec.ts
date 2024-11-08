import { maskUntilLast4 } from './mask';

describe('maskUntilLast4', () => {
  it('keeps the last four and masks the rest', () => {
    expect(maskUntilLast4('4242424242424242')).toBe('************4242');
  });
  it('returns short values unchanged', () => {
    expect(maskUntilLast4('4242')).toBe('4242');
    expect(maskUntilLast4('')).toBe('');
  });
});
