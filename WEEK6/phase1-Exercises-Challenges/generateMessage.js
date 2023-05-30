// 11. array operations

// const generateMessage = (names) => {
//     return `Hi ${names}! 50% off our best candies for you today!`;
//   };
  
//   const generateMessages = (names) => {
//     return names.map(names => generateMessage(names));
//   };

// run this in node 
// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// generateMessages(names);


//CHALLENGE

const generateMessage = (names) => {
    return `Hi ${names}! 50% off our best candies for you today!`;
  };

const generateMessages = (namesAndDiscounts) => {
    return namesAndDiscounts.map(({ name, discount }) => `Hi ${name}! ${discount}% off our best candies for you today!`);
  };

  //THIS IS WHAT WE WILL RUN IN NODE
  const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];
  
  generateMessages(namesAndDiscounts);
