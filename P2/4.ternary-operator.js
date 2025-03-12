// Ternary Operator

// Ternary Operator is a shorthand for if-else statement. It is a conditional operator that assigns a value to a variable based on some condition.
// Syntax:
// condition ? ifTrueExpr : elseExpr

let password = 8;

// function passwordChecker(ps) {
  // if (ps === 8) {
  //     return "Strong Password"
  // } else {
  //     return "Password should be 8 characters"
  // }

passwordChecker = ps => {
  return  ps === 8 ? "Strong Password" : "Password should be 8 at least characters";
}

console.log(passwordChecker(password)); 