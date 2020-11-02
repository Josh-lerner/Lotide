

  const middle = function (array){
   let num = 0
   // iterate over the function 
    for ( i = 0; i < array.length; i++){
      // condition if index is 2 or less return empty array
      if (array.length <= 2){
        return num = []
      }
      // if length is odd get the middle number
      else if ( array.length % 2 !== 0){
        num = [Math.ceil(array.length /2)] 
  
      }
          // if length is even get middle 2 numbers
    else if ( array.length % 2 === 0){
      num = [array.length /2, array.length/2 +1]
    
    }
  } 
    return num
 
  }  

  module.exports = middle;
 
