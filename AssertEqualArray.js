const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`👍👍👍 Array Assertion Passed:  ${array1}   ===   ${array2}`);
  }
  if (array1 !== array2) {
    console.log(`👎👎👎 Array Assertion Failed:  ${array1}   !==   ${array2}`);
  }
};
const eqArrays = function(array1, array2){
for (var i=0; i<array1.length; i++) 
   if(array1[i]!= array2[i])  
   
  return false; 
    return true; 
} 
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
