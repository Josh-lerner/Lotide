
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
module.exports = countOnly;
