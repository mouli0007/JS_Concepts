//  Debounce Function

const input = document.querySelector(".input");
const defaultText = document.querySelector(".default");
const debounce = document.querySelector(".debounce");

function debounce(cb, delay = 1000) {
  let timeout;
  // Returns a function !
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updateDebounceText = debounce((text) => {
  debounce.textContent = text;
});

input.addEventListener("inout", (e) => {
  defaultText.textContent = text;
  updateDebounceText(e.target.value);
});

//  Throttle Function !

//  It provides output in the given delay time no matter how long we type !

function throttle(cb, delay = 1000) {
  // Returns a function !

  let wait = false;
  let waitingArgs;
  return (...args) => {
    if (wait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    wait = true;
    setTimeout(() => {
      if (waitingArgs === null) {
        wait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
      }
    }, delay);
  };
}

const updateThrottleText = throttle((text) => {
  debounce.textContent = text;
});

input.addEventListener("inout", (e) => {
  defaultText.textContent = text;
  updateThrottleText(e.target.value);
});
