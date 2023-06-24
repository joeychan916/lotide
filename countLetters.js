<<<<<<< HEAD
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  str = str.replace(' ', '');

  for (const letter of str) {
    if (!results[letter])
      results[letter] = 1;
    else
      results[letter]++;
  }

  return results;
};

module.exports = countLetters;
=======
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  str = str.replace(' ', '');

  for (const letter of str) {
    if (!results[letter])
      results[letter] = 1;
    else
      results[letter]++;
  }

  return results;
};

module.exports = countLetters;
>>>>>>> 52792f504b2593d9dfecfe2b396a4f4d247ae93a
