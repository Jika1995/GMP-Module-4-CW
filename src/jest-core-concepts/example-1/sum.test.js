const sum = require('./sum');

test('adds 5 + 2 to equal 7', () => {
  const result = sum(5, 2);
  expect(result).toBe(7);
});

it('adds 5 + 2 to be equal 7', () => {
  expect(sum(5, 2)).toBe(7);
})

describe('Create user', () => {
  it('should create valid user object', () => {
    //some code
  });

  it('should throw error if username % password are not provided', () => {
    //some code
  })
})
