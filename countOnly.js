const countOnly = function(allItems, itemsToCount){
  
  const resultObj = {}
  for (let val of allItems){ 

  if (resultObj[val]){
    resultObj[val] ++;
  
  } else{ 
    resultObj[val] =1
  } 
  }
  return resultObj
   
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
