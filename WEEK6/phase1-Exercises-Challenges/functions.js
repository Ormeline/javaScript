//introduction - functions
() => {
    console.log('Hi there!');
  }; //This function accepts no arguments

  //This function accepts an argument
const printMessage = (message) => {
    console.log(message);
  }
  printMessage('Hi there!');
  
  //In JavaScript, you must use parentheses () to execute a function, even if it doesn't take any arguments.
  const returnFour = () => {
    return 4;
  };
  
  const something = returnFour;
  console.log(something());
  