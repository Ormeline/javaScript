// array operations exercise 1

const checkLength = (number) => {
    if(number.length <= 10) {
        return true;
    } else {
        return false;
    }
};

const filterLongNumbers = (numbers) => { // in this function, I am using the filter method of arrays to create a new array that only contains the elements for which the checkLength function returns true
    return numbers.filter(number => checkLength(number));
};


