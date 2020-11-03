const countLetters = function(string){
  // empty result
const result = {};
//iteralte through 
for (let val of string ){

  if (result[val] ){
    result[val]++;
  }


else { result[val] = 1}
}
return result

}
console.log(countLetters("hello"))
