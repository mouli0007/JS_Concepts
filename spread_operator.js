// Spread Operator !
// Splits the object or an array into a single item and copies them !

const heading = document.querySelectorAll('h1');
const result = document.getElementById('result');

const text = [...heading]
  .map((item) => {
    return `<span>${item}</span>`;
  })
  .join('');

// Spread operator function component !

const numbers = [23, 45, 66, 88, 23, 45];

console.log(Math.min(...numbers));

const john = ['Mouli ', 'VJ'];
const sayHellow = (name, last, ...r) => {
  console.log(`Hellow ${name} and ${last}`);
  r.map((item) => arr(item));
};

sayHellow(...john, ['sina', 'carrie', 'Nick', 'Adios']);

function arr(ar) {
  if (typeof String) {
    ar.map((a) => console.log(a));
  }
}
