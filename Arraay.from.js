// Array From !

// From  =>  returns an array of object from any object with a length property or an iterable array !

// From => it turns {NodeList,string,Set} into an array !
// From => has the second argument (Call-Back-Function)
// Examples !

// String !
const udemy = 'Udemy';

const res = Array.from(udemy);
console.log(res);

// Pagination Example !

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

console.log(items);
const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage);
console.log(pages);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  console.log(tempItems);
  return tempItems;
});

// it forms 10 Array of Array
console.log(newItems);
