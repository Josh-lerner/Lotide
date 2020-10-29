const eqObjects = function(object1, object2) {
  let newObj1 = Object.keys(object1);
  let newObj2 = Object.keys(object2);
  let val = true;
  if (newObj1.length !== newObj2.length) {
    val = false;
  } else {
    for (let i = 0; i < newObj1.length; i++) {
      for (let j = 0; j < newObj2.length; j++) {
        if (newObj1[i] === newObj2[j]) {
          val = true;
        }
      }
    }
  }
  return val;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (object1 === object2) {
    console.log(`👍👍👍 Object Assertion Passed:  ${inspect(object1)}   ===   ${inspect(object2)}`);
  }
  if (object1 !== object2) {
    console.log(`👎👎👎 Object Assertion Failed:  ${inspect(object1)}   !==   ${inspect(object2)}`);
  }
};

console.log(assertObjectsEqual(eqObjects({ a: "1", b: "2" }, { b: "1", a: "2" }), false));

