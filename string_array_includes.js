// String includes()
// Check if the sting is preset there or not !

const products = [];

const firstName = 'john';

const result = firstName.includes('o');

//  Another Example !

const product = [
  { title: 'Morder Poster' },
  { title: 'Bar Stool' },
  { title: 'ArmChair' },
  { title: 'Leather Chair' },
];

const text = 'ar';

const filteredProducts = product.filter(({ title }) => {
  return title.toLowerCase().includes(text);
});

console.log(filteredProducts);

// Array Includes !

const groceries = ['milk', 'bread', 'meat'];

if (!groceries.includes('Butter')) {
  groceries.push('Butter');
}

const res_ = groceries.reduce((tot, item) => {
  console.log(item);

  if (!tot.includes(item)) {
    tot.push(item);
  }

  return tot;
}, []);

console.log(res_.filter((e) => e !== 'bread'));
