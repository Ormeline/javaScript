//conditionals - exercise 1

//Define a function getNumberSign that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:
//use if, else if and else to write conditionals.
//use the strict equality operator === to compare values

const getNumberSign = (number) => {
  //this line takes a number a s a function
  //if number is positive return 'positive'
  // if number is negative, return 'negative'
  // if number is zero, return 'zero'

  if (number === 0) {
    return "zero";
  } else if (number > 0) {
    return "positive";
  } else {
    return "return negative";
  }
};

module.exports = getNumberSign;
