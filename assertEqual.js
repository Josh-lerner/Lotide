const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍👍👍 Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("👎👎👎 Assertion Failed: " + actual + " !== " + expected);
  }
};
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(2, 1);
