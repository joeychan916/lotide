const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
const withoutResult = without(words, ["lighthouse"]);

// Ensure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
