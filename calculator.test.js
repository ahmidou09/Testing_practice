const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('correctly adds two positive numbers', () => {
      const result = calculator.add(3, 7);
      expect(result).toBe(10);
    });

    test('correctly adds a positive and a negative number', () => {
      const result = calculator.add(5, -3);
      expect(result).toBe(2);
    });

    test('correctly adds two negative numbers', () => {
      const result = calculator.add(-10, -5);
      expect(result).toBe(-15);
    });
  });

  describe('subtract', () => {
    test('correctly subtracts two positive numbers', () => {
      const result = calculator.subtract(10, 3);
      expect(result).toBe(7);
    });

    test('correctly subtracts a positive and a negative number', () => {
      const result = calculator.subtract(5, -3);
      expect(result).toBe(8);
    });

    test('correctly subtracts two negative numbers', () => {
      const result = calculator.subtract(-10, -5);
      expect(result).toBe(-5);
    });
  });

  describe('divide', () => {
    test('correctly divides two positive numbers', () => {
      const result = calculator.divide(20, 5);
      expect(result).toBe(4);
    });

    test('correctly divides a positive and a negative number', () => {
      const result = calculator.divide(-10, 2);
      expect(result).toBe(-5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Cannot divide by zero.');
    });
  });

  describe('multiply', () => {
    test('correctly multiplies two positive numbers', () => {
      const result = calculator.multiply(3, 7);
      expect(result).toBe(21);
    });

    test('correctly multiplies a positive and a negative number', () => {
      const result = calculator.multiply(5, -3);
      expect(result).toBe(-15);
    });

    test('correctly multiplies two negative numbers', () => {
      const result = calculator.multiply(-10, -5);
      expect(result).toBe(50);
    });
  });
});
