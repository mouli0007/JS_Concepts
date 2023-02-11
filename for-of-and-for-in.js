// For of loop
// Lops through values of iterable object
// strings,array,map,set

// ##################
// Unlike forEach we can use break,continue

const fruits = ['apple', 'orange', 'banna', 'peach'];
const longName = 'John smith Pepper 3';

let shortName = '';

for (const letter of longName) {
  if (letter !== ' ') {
    shortName += letter;
  }
}
console.log(shortName);

let fr__ = [];
for (const fr of fruits) {
  if (fr !== 'orange') {
    fr__.push(fr);
    console.log(fr__);
  }
}

// For In Loop !

// For of loop
// specially to iterate over object Keys || properties !
// on arrays use ofr of loop !

const person = {
  name: 'Mouli  VJ',
  age: 25,
  status: 'student',
};

const another_person = {
  name: 'Sina ',
  status: 'Devops ENGG',
  avail: 'ShortGun ! ',
};

for (let i in person) {
  if (another_person[i]) {
    console.log(another_person[i]);
  }
}
