
const assertArraysEqual = function(array1, array2) {
  let result = "";
  if (array1 !== array2) {
    result = (`👎👎👎 Array Assertion Failed:  ${array1}   !==   ${array2}`);
  } else {
      result = (`👍👍👍 Array Assertion Passed:  ${array1}   ===   ${array2}`);
  }
  return result
};


module.exports = assertArraysEqual;
