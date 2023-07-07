const assert = require('chai').assert;
const tail = require('../tail');

// Test cases for tail function
describe("tail", () => {
  it("should return [2, 3] when given [1, 2, 3]", () => {
    const result = tail([1, 2, 3]);
    assert.deepEqual(result, [2, 3]);
  });

  it("should return an empty array when given ['hello']", () => {
    const result = tail(['hello']);
    assert.deepEqual(result, []);
  });

  it("should return an empty array when given an empty array", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});

