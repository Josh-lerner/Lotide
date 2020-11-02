const letterPositions   = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns { j: [ 0 ], o: [ 1 ], s: [ 2 ], h: [ 3 ] } for josh", () => {
    assert.deepEqual(letterPositions("josh"), { j: [ 0 ], o: [ 1 ], s: [ 2 ], h: [ 3 ] });
  });
});
