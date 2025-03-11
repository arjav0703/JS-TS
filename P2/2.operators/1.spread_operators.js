//Challenge 
// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// -----------------------------
// spread operator doing the concat job
let arr = [1, 2, 3];
let arr1 = [4, 5];

let arr2 = [...arr, ...arr1]
console.log(arr2); 

// challenge 2
const user = {
    name: "Jen",
    age: 22,
  };

const cloneUser = {...user};
console.log(cloneUser);