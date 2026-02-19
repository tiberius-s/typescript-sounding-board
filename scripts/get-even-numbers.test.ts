import { describe, expect, test } from 'vitest';
import { getEvenNumbers } from '@scripts/get-even-numbers';

describe('scripts/get-even-numbers.ts', () => {
  test('should return 3 even numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = getEvenNumbers(numbers);

    expect(result).toEqual([2, 4, 6]);
  });

  test('should return an empty array', () => {
    const numbers = [1, 3, 5];
    const result = getEvenNumbers(numbers);

    expect(result).toEqual([]);
  });
});
