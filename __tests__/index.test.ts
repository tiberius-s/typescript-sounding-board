import { afterEach, describe, expect, test, vi } from 'vitest';

describe('index.ts', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should call console.info', async () => {
    const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => vi.fn());
    await import('../index.js');
    expect(infoSpy).toHaveBeenCalledWith('Hello, World');
  });
});
