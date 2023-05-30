//loops - challenge
 
const fizzbuzzUntil = (number) => {

   // Loop from 1 to the given number. The code starts by initializing a loop using a for statement, starting from 1 and going up to number. For each number in the range, the code checks the following conditions in order:
  for (let i = 1; i <= number; i++) {
    // Check if the given number is divisible by both 3 and 5. The given number here is 1
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');// Print "FizzBuzz" if divisible by both 3 and 5

      // Check if the current number is divisible by 3
    } else if (i % 3 === 0) {
      console.log('Fizz');

      // Check if the current number is divisible by 5
    } else if (i % 5 === 0) {
      console.log('Buzz');

      // If none of the above conditions are met, print the current number 
    } else {
      console.log(i);
    }
  }
};

// Export the fizzbuzzUntil function since we are using the node module)
module.exports = fizzbuzzUntil;
