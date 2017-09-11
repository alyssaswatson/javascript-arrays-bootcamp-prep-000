var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray(array, elelment) {
  array.unshift(element)
  return array
}
