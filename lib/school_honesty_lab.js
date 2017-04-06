'use strict'

const developer = {
  name: "Mike",
  late: true,
  score: 100
}

const anotherDeveloper = {
  name: "Bernard",
  late: false,
  score: 90
}

const developers = [developer, anotherDeveloper]

const deductForLate = function (developer) {
  developer.score = 0
}

// write a callback that can be passed to runLateScript
// it should have a parameter for a weekNum object
// to note the late submission was early in the course
const isFirstWeek = function (weekNum) {
  return weekNum === 1
}

// the function should accept an array of developers
// and two callback functions
const runLateScript = function (developers, ) {
  // loop through the developers array and check who was late
  // then pass them as an argument to the correct callback

}

// the function should get passed an array of developers
// and two callback functions
runLateScript()

// the function should get passed an array of students
// and two callback functions
runCheatingScript()

module.exports = {
  developers,
  deductForLate
}
