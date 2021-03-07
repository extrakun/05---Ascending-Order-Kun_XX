const index = require('./index.js');
const inAscendingOrder = require('./index.js')

describe("UnitTests", function() {

  test("1,2,3,4,5", async function() {
    expect( inAscendingOrder([1,2,3,4,5])).toBe(true)
  });

  test("10,-11,21,30", async function() {
    expect(inAscendingOrder([10,-11,21,30])).toBe(false)
  });

  test("100,101,102,105,111,200,210,3000", async function() {
    expect(inAscendingOrder([100,101,102,105,111,200,210,3000])).toBe(true)
  });

});