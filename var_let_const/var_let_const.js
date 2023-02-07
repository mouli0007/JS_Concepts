//  Var, let and , const !


//  Scoping

// 4 different types of scoping

// Global Scope
// Block Scope
// Functional Scope
// Module Scope

// Var is Hoisted and ista a functional scope1
//  Let and const are not hoisted and its a block scope

//  Globale Scope the variable a can be accessed anywhere in the file !
const a = 1;

function test() {
  const b = 2;
  console.log(a, b);
}
test();

// Module Scope
//  Its Only available in that file unless you export it out

export const module_ = "Mouli VJ";

// Function Scoping !

function test_2() {
  const b = 2;

  if (true) {
    //  block Scope oncly access inside the block
    const c = 2;
    console.log(b, c);
    var x = 109;
  }
  console.log(x);
}

test_2();

//  Var let and const
// VAR => is Function scope
// let and const => is BLOCK scope

// Var => Can re assign and re declare | It is function Scoped !
// let  = > can re assign
//  const => None !

// global Scope !
var x = 1;
let y = 2;
const v = 10;

// Local Scope has 2

// Block Scope !
{
  var p = 90;
  let y = 6;
}

// Var is accessable even outside the block scope
console.log(p);

// Function Scope !

function myFunc() {
  const z = 7;
  {
    console.log(z);
  }
}

myFunc();
