// functions and callbacks-  Challenge

let counter = 0; // declares a variable named counter and initializes i with a value of 0. The let keyword is used becuase the value of counter will change over time.

const increment = () => { // declares a constant variable named increment and assigns it an arrow function as its value. the arrow function has no parameters.
    counter++; // inside the function counter is incremented by 1 using ++ operator.
    console.log(counter); // then the value of the counter is printed to the console using console.log().
};

const executeCounterDelay = (delay, setintervalFunction) => { // this line delcares a constant variable named executeCounterDelay and assigns it an arrow function as its value. The arrow funciton has two parameters: delay and setintervalFunciton
    setInterval(setintervalFunction, delay * 1000);// inside the executeCounterDelay function, the setInterval functionis called and  function repeatedly executes the setintervalFunction at a specified interval. 
}; // the interval is determined by delay * 1000, which is used to convert the delay value from seconds to milliseconds

executeCounterDelay(1, increment); 
// this line calls the executeCounterDelay function, which takes 2 arguments:
// '1' indicates a delay of 1 second between each execution of the intervalFunction.
//the 2nd argument is the increment dunction itself which will be called repeatedly by setintervalFunction() 
// this line basically starts the execution of increment every 1 second

