
const assertArraysEqual = require('chai').assert
const middle = require('../middle')



describe("#middle", () => {
  it("returns [4,5] for [1,2,3,4,5,6,7,8]", () => {
    assertArraysEqual.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });
  it("returns [] for [5]", () => {
    assertArraysEqual.deepEqual(middle([5,7]), []); 
  });
});
