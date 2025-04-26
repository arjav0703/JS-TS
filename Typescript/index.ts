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

// let typefunc: Function;
// typefunc = (x: string | number | null) => {
//   if (typeof x === "string")
//     console.log(x.toUpperCase(), console.log(typeof x));
//   else if (typeof x === "number")
//     console.log(x.toString(), console.log(typeof x));
//   else console.log("the value is null");
// };

// const variable = 23;
// typefunc(variable);

type city = {
  name: string;
  postalcode: number;
  population: number;
  state: string;
};

const vidisha: city = {
  name: "Vidisha",
  postalcode: 464001,
  population: 100000,
  state: "Madhya Pradesh",
};
