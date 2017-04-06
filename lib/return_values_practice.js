'use strict'

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  return {
    givenName,
    // same as givenName: givenName (shorthand syntax)
    //can only be done when key is same as parameter
    surname,
    bornOn,
    height,
    weight,
    eyeColor
  }
}

const counterFactory = function () {
  let count = 0
  return function () {
    return count++
  }

}

module.exports = {
  createPerson,
  counterFactory
}
