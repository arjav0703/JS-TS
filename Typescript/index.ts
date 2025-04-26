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

// ++++++ CREATING CUSTOM TYPES
// type city = {
//   name: string;
//   postalcode: number;
//   population: number | undefined;
//   state: string;
// };

// const vidisha: city = {
//   name: "Vidisha",
//   postalcode: 464001,
//   population: undefined,
//   state: "Madhya Pradesh",
// };

// console.log(
//   `The city of ${vidisha.name} (${vidisha.postalcode}) is in the state of ${vidisha.state}`,
// );

interface User {
  uname: string;
  name: string;
  age: number;
  email: string;
}
interface internaluser extends User {
  role: string;
}

const arc: Function = (user: internaluser) => {
  if (user.role === "admin" || user.role === "owner") {
    return true;
  } else return false;
};

const arjav: internaluser = {
  uname: "arjav0703",
  name: "Arjav",
  age: 15,
  email: "arjav@hackclub.app",
  role: "owner",
};

if (arc(arjav)) {
  console.log(`Access granted to ${arjav.uname}`);
} else {
  console.log(`Access denied to ${arjav.uname}`);
}
