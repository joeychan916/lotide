// Importing necessary functions
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// takeUntil function implementation
const takeUntil = function(array, callback) {
  const result = []; // Initialize an empty array to store elements
  for (const item of array) {
    if (callback(item)) { // If callback returns true, stop iterating
      return result; // Return the result array
    }
    result.push(item); // Add current item to the result array
  }
  return result; // Return the result array if no true value from callback
};

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // Take elements until x is less than 0
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // Check if the result matches expected output

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // Take elements until x is a comma
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // Check if the result matches expected output
