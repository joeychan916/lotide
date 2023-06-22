// Function to compare two arrays for equality
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function to assert if two arrays are equal
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: Arrays are equal.");
  } else {
    console.log("❌❌❌ Assertion Failed: Arrays are not equal.");
  }
};

// Map function implementation
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // Call the callback function on each item and push the result to the results array
    results.push(callback(item));
  }
  return results;
};

// Test cases
const words = ["ground", "control", "to", "major", "tom"];

// Test 1: Map to uppercase
const result1 = map(words, word => word.toUpperCase());
assertArraysEqual(result1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test 2: Map to word lengths
const result2 = map(words, word => word.length);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);

// Test 3: Map to first letter
const result3 = map(words, word => word[0]);
assertArraysEqual(result3, ["g", "c", "t", "m", "t"]);
