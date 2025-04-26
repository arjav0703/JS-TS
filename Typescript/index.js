// let array: any[];
// array = [1, 4, 4, 1, 7, 7, 4, 1, 4, 6, 9, 0, 3, 5, 7, 9, 6, 2];
// console.log(array);
// enum mpos {
//   x = 0,
//   y = 0,
// }
// let myvar: string | null;
// myvar = "Hello";
// console.log(myvar.length);
var typefunc;
typefunc = function (x) {
    if (typeof x === "string")
        console.log(x.toUpperCase(), console.log(typeof x));
    else if (typeof x === "number")
        console.log(x.toString(), console.log(typeof x));
    else
        console.log("the value is null");
};
var variable = 23;
typefunc(variable);
