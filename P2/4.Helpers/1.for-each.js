// const colors = ['red', 'green', 'blue','teal'];

// const iterate = arr => {
//     console.log(arr)
// } 

// colors.forEach(iterate);

// Challenge
arr = [1,2,3,4,5,6,7,8,9,10];
let s = 0;

adr = arr => {
    s += arr;
}

arr.forEach(adr);
console.log(s);