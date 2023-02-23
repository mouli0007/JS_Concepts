//  Example one !
// Memoization polyfill !

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    let argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsySquare = (num1, num2) => {
  //  it will take along time to run so we need to memoize
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const res = myMemoize(clumsySquare);
console.log(res(199999, 1891818));
console.log(res(199999, 1891818));
