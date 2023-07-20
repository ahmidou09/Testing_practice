const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    const inputString = 'hello';
    const result = capitalize(inputString);
    expect(result).toBe('Hello');
  });

  test('capitalizes the first character of an empty string', () => {
    const inputString = '';
    const result = capitalize(inputString);
    expect(result).toBe('');
  });
});
