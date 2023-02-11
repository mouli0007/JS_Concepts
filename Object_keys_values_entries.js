// Three methods to convert object ito arrays
// Object.keys()=> convert property name into array
// Object.values()=>convert property values into array
// Object.entries()=>Converts both

const person = {
  name: 'Mouli VJ',
  age: 25,
  status: 'Front_END_DEV',
};

const keys = Object.keys(person);
console.log(keys);

['name', 'age', 'status'];

const values = Object.values(person);
console.log(values);

['Mouli VJ', 25, 'Front_END_DEV'];

const entries = Object.entries(person);
console.log(entries);

// Map Method with entries

const newresult = entries.map((item) => {
  const [first, second, third] = item;
  // console.log(first);
  // console.log(second);
});

// For of Loop !

for (const [first, second] of entries) {
  console.log(first);
  console.log(second);
}

const arr = [
  ['name', 'Mouli VJ'],
  ['age', 25],
];

arr.map((e) => {
  const [first, second] = e;
  console.log(first, second);
});
