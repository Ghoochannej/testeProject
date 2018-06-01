const lib = require('../');

describe('SUM Test', () => {
  test('should return 10', (done) => {
    expect(lib.sum(5, 5)).toBe(10);
    done();
  });
});

describe('SUBTRACT Test', () => {
  test('should return 0', (done) => {
    expect(lib.subtract(5, 5)).toBe(0);
    done();
  });
});

describe('MULTIPLY Test', () => {
  test('should return 25', (done) => {
    expect(lib.multiply(5, 5)).toBe(25);
    done();
  });
});

describe('DIVIDE Test', () => {
  test('should return 2', (done) => {
    expect(lib.divide(10, 5)).toBe(2);
    done();
  });
});
