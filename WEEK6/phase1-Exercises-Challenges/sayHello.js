//Exercise
// define a function 'sayHellp' , so when in node, it returns the string 'Hello':
```javascript 
> sayHello();

const sayHello = () => {
    console.log('Hello');
};
module.exports = sayHello;
sayHello();
Hello
```;

const sayHello = (name) => {
  return "Hello" + name;
};

module.exports = sayHello; // must always call this line if you want to use the require function.
