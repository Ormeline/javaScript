const add = require("./add");
// exporting functions
const multiply = require("./multiply");

const calculate = () => {
  //It calculates the sum of 4 + 4 by calling the add function with those arguments: add(4, 4).
  //It then multiplies the result of the sum (add(4, 4)) by 2 using the multiply function: multiply(2, add(4, 4))
  const result = multiply(2, add(4, 4));
  console.log(result);
};

module.exports = calculate;
