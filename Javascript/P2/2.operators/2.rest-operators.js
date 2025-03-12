// Challenge 
// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

// -----------------------------
const infinityStoneColors = (...colors) => {
    console.log(...colors);
}

infinityStoneColors('red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black');


// Notes 
// Rest operator is used to pass infinite number of arguments to a function
// Rest operator is used to pass an array to a function
// Rest operator is used to pass an object to a function