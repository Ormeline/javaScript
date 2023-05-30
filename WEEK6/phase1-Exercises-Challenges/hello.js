//Variables and getting visibility

console.log("Hello - I am a file!");

console.log(2 + 2);

// Just printing a literal string
console.log("Hello there");

// Declaring a new variable `age`
age = 27;

// We can concatenate strings with variables using the + operator
console.log("I am " + age + "years old");

// Assigning a new value
age = 30;
console.log("I am now " + age + "years old!");

const name = "Charlie";

name = "Jess"; // will throw 'TypeError: Assignment to constant variable.'

const hello = () => {
  console.log("Hello!");
};
module.exports = hello;
