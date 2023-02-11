// REST Operator !
// It gathers and collect the elements !
// Rest operator should always be in the last
const fruit = ['apple', 'orange', 'lemon'];

// Arrays !
const [first, ...rest] = fruit;

console.log(first);
console.log(rest);

const person = {
  // Objects !
  name: 'John',
  lastName: 'Smith',
  job: 'Developer',
};

const { job, ...per } = person;
console.log(job);
console.log(per);

function all(...an) {
  console.log(an[1].map((e) => e));
}

// all(fruit);
all(person, fruit);

const getAverage = (name, ...score) => {
  let total = 0;
  let final_score = score.map((scr) => {
    total += scr;
    return total;
  });
  final_score.map((e) => console.log(e));
  return {
    name,
    total,
    final_score,
  };
};

const mouli = getAverage('Mouli VJ', 90, 89, 88);
console.log(mouli);
