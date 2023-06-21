// Import the eqArrays function
const eqArrays = require('./eqArrays');

// Implement the eqObjects function
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // Get the keys of object1
  const keys2 = Object.keys(object2); // Get the keys of object2

  if (keys1.length !== keys2.length) {
    // If the number of keys is different, the objects are not equal
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If both values are arrays, use eqArrays to compare them
      if (!eqArrays(object1[key], object2[key])) {
        // If the arrays are not equal, the objects are not equal
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If the values are not arrays and not equal, the objects are not equal
      return false;
    }
  }

  return true; // All checks passed, the objects are equal
};

// Export the eqObjects function
module.exports = eqObjects;
