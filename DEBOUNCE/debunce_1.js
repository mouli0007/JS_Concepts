//  Debounce and throttle !
//  Performance and Best User Experience !
//  Mainly used in Fecting the API

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//  Example !
const debounceText = document.getElementById("debounce");
const defaultText = document.getElementById("default");

const updateDebounceText = debounce((text) => {
  debounce.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

//  Debounce Function !
//  it waits for the second delay whatever we are specifing inside
function debounce(cb, delay) {
  let timeOut;
  return (...args) => {
    //  U Keeps on clearing the intreval by pressing the key continiously within 1 sec
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//  THROTTLE
//  it stores the value whatever we changes and It runs Immediatley
//  Main Use Case ()=>| Mouse Movements | Window Resize |
function throttle(cb, delay) {
  let shouldWait = false;
  let waiting;

  const timeOutFunc = () => {
    if (waiting === null) {
      shouldWait = false;
    } else {
      cb(...waiting);
      waiting = null;
      // setTimeout(timeOutFunc, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waiting = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    // setTimeout(timeOutFunc, delay);
  };
}

//  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// 2nd time !

// Function that will be called after some dealy

// const update = _delay((text) => {
//   _delayText.textContent = text;
// });

// const AddEventListener = (e) => {
//   update(e.target.value);
// };

// function _delay(cb, delay = 1000) {
//   let timeOut;
//   //
//   return (...args) => {
//     console.log(timeOut);
//     clearTimeout(timeOut);
//     timeOut = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// }
