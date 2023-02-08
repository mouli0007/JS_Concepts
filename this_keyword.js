//  This Keyword !

// This keyword mainly used  in the following !

// Normal function
// Arrow funciton
// call,appyly,bind
// ES6 classes and Constructor functions !

//  Defenitions !

// In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object.

//  Example of This Keyword with arrow function !

let user = {
  name: "Mouli VJ",
  age: 23,

  get_details() {
    const arr = () => console.log(this.name);
    arr();
  },
};

user.get_details();

//  Normal function will only be pointing to its immediate parent !
//  THIS Keyword value of arrow function comed from its parent function

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//  This key word in class and constructor

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
  full = () => {
    console.log(this.name);
  };
}

const u = new User("Beast !");
u.full();

const ob = {
  name: "Messi !",
  log() {
    console.log(this.name);
  },
};

setTimeout(() => {
  ob.log();
}, 1000);

//  Calculator

const calc = {
  total: 0,

  add(num) {
    this.total += num;
    return this;
  },

  mul(num) {
    this.total *= num;
    return this;
  },
  sub(num) {
    this.total -= num;
    return this;
  },
};

const result = calc.add(160).sub(90).mul(7);
console.log(result.total);
