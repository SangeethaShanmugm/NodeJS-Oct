var chai = require("chai")
var assert = chai.assert
var expect = chai.expect

var checkResult = "Hello"
var array = [1, 2, 3]

// assert.isString(checkResult, "not a string")
assert.isArray(array, "not an Array")
expect(array).to.be.an("array").that.includes(5)

