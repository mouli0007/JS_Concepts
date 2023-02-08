//  closure and lexical scoping
// closure is created when we define a function not when a function exceuted !
// We have access even after the parent funciton done execution

let x = 1;

const parentFunction = () => {
  // Local Scope
  let myVal = 2;
  console.log(x);
  console.log(myVal);
  //  Nested child Func have acces to
  // Local and Parent and Global Scope !
  const childFunc = () => {
    console.log((x += 5));
    console.log((myVal += 5));

    const another = () => {
      console.log("Mouli VJ");
      console.log((myVal += 59));
      console.log((x += 59));
    };
    return another;
  };

  return childFunc;
};

const result = parentFunction()();

result();

// Closure in  IIFE

const private = (() => {
  let count = 0;
  console.log("initial value " + count);

  return () => {
    count += 1;
    console.log(count);
  };
})();

private();
private();

//  Another Example

const credit = ((num) => {
  let credits = num;

  console.log(`inital credits value :  ${credits}`);
  return () => {
    credits -= 1;

    if (credits > 0) {
      console.log("Credits remaining ! " + credits);
    } else {
      console.log("Out of credits ! " + credits);
    }
  };
})(7);

credit();
credit();
