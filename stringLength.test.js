const stringLength = require('./stringLength');

describe('stringLength', () => {
  test('returns the correct character count of a string', () => {
    const inputString = 'Hello';
    const result = stringLength(inputString);
    expect(result).toBe(inputString.length);
  });

  test('returns 0 for an empty string', () => {
    const inputString = '';
    expect(() => {
      stringLength(inputString);
    }).toThrow('String must not be empty.');
  });

  test('throws an error for a string longer than 10 characters', () => {
    const inputString = 'ThisIsTooLong';
    expect(() => {
      stringLength(inputString);
    }).toThrow('String must not be longer than 10 characters.');
  });
});
