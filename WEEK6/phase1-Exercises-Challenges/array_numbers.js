//arrays exercise 2

//create an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//create a variable name i.e. sum and initialize it
let sum = 0; 

//calculate sum using forEach() method
numbers.forEach((number) => { // i used the forEach() method to iterate over each item in the array.
    sum +=number; //I reassigned the value of the sum variable by adding its current value and the value of the current array element in each iteration.
})

console.log(sum);
 