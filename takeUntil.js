const takeUntil = function(array, callback) {
  const resultArray = [];
  for (const value of array) {
    if (!callback(value)) {
      resultArray.push(value);
    } else if (callback(value)) {
      break;
    }
  }
  return resultArray;
};




module.exports = takeUntil;
