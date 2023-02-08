// Arrow Function

// Syntax !

const sayHi = () => console.log('Hellow !');
const add = (a, b) => a + b;

// Arrow funciton vs normal funciton !

// Differences !

// 1 = > Implicit return
// 2 => syntax
// 3 => arguments key cannot used in arrow funciton
//  4 =>  this keyword behaves Differently
// 5=>  DOM addEventListener !
//  6 => arrow function points to the window object

// Some Examples of Arrow Functions !!

// In Object THIS keyword going to refers to an object !

const obj = {
  name: 'Mouli VJ',
  fun: () => {
    // Arrow function going to surround the global scope !
    console.log(this.name);
  },
};

// ARROW FUNCTION IN SETTIMEOUT

// Normal function will point to the window object of SETTIMEOUT
const obj_1 = {
  name: 'Mouli VJ',
  fn: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

// Arrow function !

// It will pint to the surrounding scope and it points to the object !
const obj_1 = {
  name: 'Mouli VJ',
  fn: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};

// DOM addEventListener !

// basic syntax !
const btn = document.querySelector('.empty');

btn.addEventListener('click', function () {
  // This points to the button element !
  console.log(this);
  // Regular funciton Wont WOrk !
  setTimeout(function () {
    this.style.color = 'black ';
  }, 2000);
});

// Arrow Function !
btn.addEventListener('click', function () {
  // This points to the button element !
  console.log(this);
  setTimeout(() => {
    this.style.color = 'black ';
  }, 2000);
});
