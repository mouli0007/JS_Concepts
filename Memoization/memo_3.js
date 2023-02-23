//  Dave Gray !

// Main ways to use Memoization

//   Intensive Processing
// API Request
// Recursive function

// Example 1

const intiApp = async () => {
  const mulBy = memoMulBy10();
  //   console.log(mulBy(90));
  //   console.log(mulBy(90));
};

document.addEventListener("DOMContentLoaded", intiApp);

const mulBy10 = (num) => {
  return num * 10;
};

//  Memoize version for a normal Calculative function
// for a specific Value !

const memoMulBy10 = () => {
  const cache = {};

  return (num) => {
    if (cache[num] !== undefined) {
      console.log(cache);
      return cache[num];
    }
    const result = num * 10000;
    cache[num] = result;
    return result;
  };
};

// ###########################################
// ###########################################
// Example 2 Very Complex Function With

let prevValues = {};
function square(n) {
  if (prevValues[n] !== undefined) {
    console.log(prevValues);
    return prevValues[n];
  }
  let result = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  prevValues[n] = result;
  return result;
}
console.log(square(9));
console.log(square(9));

// ###########################################
// ###########################################
// Example 3
//  Memoize with Deccorator Function !
//  Memoize function which acceepts aother function ! and addds the functionality
const by10 = (num) => {
  return num * 10;
};

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if (cache[args.toString() !== undefined]) {
      console.log(cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};

const mem = memoize(by10);
console.log(mem(89));
console.log(mem(89));
console.log(mem(99));
console.log(mem(99));

// ###########################################
// ###########################################
//  Fibonacci with Memoization

const fib = (pos) => {
  if (pos < 2) return pos;

  return fib(pos - 1) + fib(pos - 2);
};

const fibMemo = (fn) => {
  let cache = {};
  return (...args) => {
    if (cache[args.toString()]) {
      console.log(cache);
      return cache[args.toString()];
    }

    let result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};

const _fib = fibMemo(fib);
console.log(_fib(40));
console.log(_fib(40));
console.log(_fib(30));
console.log(_fib(30));
console.log(_fib(10));
console.log(_fib(10));
