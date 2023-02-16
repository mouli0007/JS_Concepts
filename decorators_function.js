//  JS Decorators Function

//  It Wrap a function with another function that
//  the wrapper function decorate the original function with new capabilitites

//  mainly used for DRY Principle !

// ####################################
// Example 1
//  Using the closure to log how many times the functions are logged

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const callCounter = (fn) => {
  let count = 0;

  return (...args) => {
    console.log(` Sum has been Called ! ${(count += 1)}`);
    return fn(...args);
  };
};

const mouli = (...args) => {
  console.log("Mouli VJ");
  console.log(args);
};

const c1 = callCounter(sum);

// console.log(c1(1, 2, 3, 4, 5, 6, 7, -8, 9, -10));
// console.log(c1(1, 2, 3, 4, 5, 6, -907, 8, -9, 10));

// ####################################
// Example 2 of
//  to check the valid data and number of params

let rectArea = (length, width) => {
  return length * width;
};

// Checking the length
const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error("Invalid params");
    }
    return fn(...params);
  };
};

// Checking the Integers
const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Param for ${fn.name} must be integer`);
      }
    });
    return fn(...params);
  };
};

rectArea = countParams(rectArea);
rectArea = requireIntegers(rectArea);
console.log(rectArea(12, 13));
console.log(rectArea(12, 190));

const moulii = (...params) => {
  [...params].map((e) => {
    console.log(e);
  });
};

moulii("Mouli VJ", "Kavi Priya", "Karthik", "Logeshwaran");

// ####################################

// Example 3
// Decorating Async Api Call Function
//  time Data request during the development !

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

//  Checking the time to be calculated
const dataResponseTime = (fn) => {
  return async (url) => {
    console.time("fn");
    const data = await fn(url);
    console.log(data);
    console.timeEnd("fn");
    return data;
  };
};

// Testing the Function
const myTestFunction = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(data);
};

// myTestFunction();

const display = async () => {
  const jsonData = dataResponseTime(requestData);
  const res = await jsonData("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res);
};

display();
