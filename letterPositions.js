const letterPositions = function(sentence) {
  const result = {}
  for (let val = 0; val < sentence.length; val ++){
    let letter = sentence[val];
    if (letter !== ' ') {
      if (!result[letter]){
        result[letter] = [val]
      } else {
        result[letter].push(val)
      }
    }
  }
  return result;
}

module.exports = letterPositions;
