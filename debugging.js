function average(list) {
  let sum = 0;
  
  for (let num of list) {
    sum += num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));


let input = process.argv[2];

if (input)
  //console.log(reverse(input));

function reverse(original) {
  return orignal.split('').reverseList().join('');
}
