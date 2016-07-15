// var person = {};
//
// person.firstName = 'Sheena';
// person.lastName = 'Takkenberg';
// person.age = 33;
//
// delete person.age;
// console.log(person);
//
// function greetUser (person) {
//   console.log('Hello, ' + person.firstName + ' ' + person.lastName + ', you are: ' + person.age + ' years old');
// }
//
// greetUser(person);

var pet = {};

pet.name = 'Claudie';
pet.type = 'catfish';

console.log(pet);

function printPet(pet) {
  console.log('You own a ' + pet.type + ' named: ' + pet.name);
}

printPet(pet);
