

const tail = function(array) {
  for (let i = 0; i < array.length; i++) {
    return array.slice(1);
  }
};

module.exports = tail;
