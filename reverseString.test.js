const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses a string', () => {
    const inputString = 'Hello, World!';
    const reversedString = '!dlroW ,olleH';
    const result = reverseString(inputString);
    expect(result).toBe(reversedString);
  });

  test('reverses an empty string', () => {
    const inputString = '';
    const result = reverseString(inputString);
    expect(result).toBe('');
  });
});
