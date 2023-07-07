const assert = require('chai').assert;
const middle = require('../middle');

// Test cases for middle function
describe("middle", () => {
  it("should return [2] when given [1, 2, 3]", () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });

  it("should return [3, 4] when given [1, 2, 3, 4, 5]", () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3, 4]);
  });

  it("should return an empty array when given [1]", () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });
});
