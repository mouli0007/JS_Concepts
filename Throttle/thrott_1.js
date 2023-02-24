//  Throttilng in javascript !

const expensive = () => {
  console.log("Expensive !");
};

const throttle = (fn, delay) => {
  //   Initial Flag call !
  let flag = true;
  return () => {
    //    we have to make restrict the call with FLAG !
    //   We use closure coz we dont want to re-initialize the flag again and again !
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
    }
    setTimeout(() => {
      flag = false;
    }, delay);
  };
};

const betterExpensive = throttle(expensive, 2000);

window.addEventListener("resize", betterExpensive);
