'use strict'
// arguements is used as an "array like" object. JS knows what it is.
// assigning this to arguments[0] is done so because we have an arbitrary
// amount of arguments. Normally we would assign it 0.

const max = function () {
  let result = arguments[0]
// using max here supposedly increases loop performance Note the COMMA
  for (let i = 1, max = arguments.length; i < max; i++) {
    const current = arguments[i]
    result = current > result ? current : result
  }
  return result
}

const maxOfArray = function (arr) {
  let result = arr[0]
  // using max here supposedly increases loop performance Note the COMMA
  for (let i = 1, max = arr.length; i < max; i++) {
    const current = arr[i]
    result = current > result ? current : result
  }
  return result
}

const addProperty = function (obj, prop, val) {
  // side effect
  obj[prop] = val
  //this is the main effect
  return val
}

module.exports = {
  max,
  maxOfArray,
  addProperty
}
