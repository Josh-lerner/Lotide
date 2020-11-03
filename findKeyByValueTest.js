const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns drama for The Wire", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns comedy Brooklyn Nine-Nine", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
 });
});


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

