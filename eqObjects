const eqObjects = function (object1, object2) {
  let newObj1 = Object.keys(object1);
  let newObj2 = Object.keys(object2);
  let val = true // maybe use variable as placeholder?
  //console.log(val, "test")
  // compare length, if they dont match its false
  if (newObj1.length != newObj2.length) {
    //console.log(newObj1.length);
    //console.log(newObj2.length);
    val = false
  } else {
    // iterate through 1 array
    for (let i = 0; i < newObj1.length; i++) {
      for (let j = 0; j < newObj2.length; j++) {
        console.log(newObj1[i], "Obj1")
        console.log(newObj2[j], "Obj2")
        if (newObj1[i] == newObj2[j]) {
          val = true
        }
      }
    }
  }
  return val
}

const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
