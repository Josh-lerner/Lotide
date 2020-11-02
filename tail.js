const assertEqual = require('./assertEqual')

const words = ["Yo Yo", "Lighthouse", "Labs",];
const tail = function(array) {
  for (let i = 0; i < array.length; i++) {
    return array.slice(1);
  }
};
tail(words);
assertEqual(words.length, 3);
