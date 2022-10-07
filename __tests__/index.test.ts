import { jest } from '@jest/globals';

const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementationOnce(jest.fn);

describe('index.ts', () => {
  test('should call console.info', () => {
    require('../index.ts');
    expect(consoleInfoSpy).toHaveBeenCalledWith('Hello, World');
  });
});
