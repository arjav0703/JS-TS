// Challenge
// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
  ];
   
let allProductsBooks = products.every( p => p.category == 'Books');
let someProductsBooks = products.some( p => p.category == 'Books');
  
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].category != "Books") {
//       allProductsBooks = false;
//     } else {
//       someProductsBooks = true;
//     }
//   }
  console.log(allProductsBooks);
  console.log(someProductsBooks);