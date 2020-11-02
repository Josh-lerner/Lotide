

const eqArrays = require('./eqArrays')


const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`👍👍👍 Array Assertion Passed:  ${array1}   ===   ${array2}`);
  }
  if (array1 !== array2) {
    console.log(`👎👎👎 Array Assertion Failed:  ${array1}   !==   ${array2}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
