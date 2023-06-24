// Import the eqObjects function
const eqObjects = require('./eqObjects');
// Import the inspect function from the util library
const { inspect } = require('util');

// Implement the assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    // Objects are equal
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // Objects are not equal
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Export the assertObjectsEqual function
module.exports = assertObjectsEqual;
