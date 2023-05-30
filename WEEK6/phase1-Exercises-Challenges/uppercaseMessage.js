//functions as value
const uppercaseMessage = (message) => {
    return message.toUpperCase();
  }
  
  // This function accepts as arguments a string message, and a function.
  // It then calls the given function to do its job.
  const transform = (message, transformFunction) => {
    return transformFunction(message);
  }
  
  transform("hello", uppercaseMessage);

  // type all the above in the node terminal 
  // it will print 'HELLO'