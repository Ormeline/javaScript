// functions as values
// demo
// const lowercaseMessage = (message) => {
//     return message.toLowerCase();
// }

// const transform = (message, transformFunction) => {
//     return (transformFunction(message));
// }

// transform("HELLO", lowercaseMessage);

//Exercise
//functions as values
const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return (transformFunction(message));
}

transform("WHY ARE YOU SHOUTING", lowercaseMessage);