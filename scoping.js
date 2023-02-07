//  Hoisting !

// Function hoisting !

function sumFunc(a, b) {
  return a + b;
}

const sum = (a, b) => a + b;

console.log(sumFunc(9, 8));
console.log(sum(119, 8));

// Variables Hoisting !

// Var is hoisted (it will throw undefined !)
//  Let and const are not hoisted ! (it will throw an error)
