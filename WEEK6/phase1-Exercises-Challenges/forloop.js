// Use a for loop to iterate numbers from 1 to 20,
// and for each of them, print whether the number
// is even or odd.
const getParity = (number) => {
for (let i = 1; i <= 20; i++) { // from 0 to 20
    if (i % 2 === 0) { //logic
      console.log(i + ' is even'); //print number and that its even
    } else {
      console.log(i + ' is odd'); //prints number and that its odd
    }
  }
}
  