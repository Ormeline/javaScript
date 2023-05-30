//arrays CHALLENGE

const addToBatch = (array, number) => {
    if (array.length >= 5) { 
      return array; // Return the array as is if its length is already 5 or greater
    } else {
      return array.concat(number); // the .concat() method is used to create a new array by combining the existing array with an array containing the number. This ensures that the number is added as a single element to the array, preserving the expected output.
    } //the .concat() method does not modify the original array; instead, it returns a new array with the concatenated elements.
  };
  

console.log(addToBatch([1], 3)); // Output: [1, 3]
console.log(addToBatch([1, 2, 3], 4)); // Output: [1, 2, 3, 4]
console.log(addToBatch([], 8)); // Output: [8]
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); // Output: [1, 2, 3, 4, 5, 6]
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
